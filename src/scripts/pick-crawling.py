import requests
from io import BytesIO
from PIL import Image
from colorthief import ColorThief
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException, TimeoutException, NoSuchElementException
from datetime import datetime
import re
import time
import json
import os
import random

# 기본 URL 설정
base_url = "https://www.campuspick.com"

# 크롤링한 데이터를 모아두는 리스트
all_content = []

# 캠퍼스픽 공모전 및 활동 페이지 url
contest_url = "https://www.campuspick.com/contest"
activity_url = "https://www.campuspick.com/activity"
url_list = [(contest_url, "contest"), (activity_url, "activity")]

# ChromeDriver 실행
try:
    driver = webdriver.Chrome()
except Exception as e:
    print("Error starting Chrome:", e)
    exit(1)

# 수집할 최대 게시물 개수
max_contest_items = 100
max_activity_items = 100

# 이미지에서 주요 색상을 추출하는 함수
def get_image_dominant_color(image_url):
    try:
        response = requests.get(image_url)
        color_thief = ColorThief(BytesIO(response.content))
        dominant_color = color_thief.get_color(quality=1)
        hex_color = '#{:02x}{:02x}{:02x}'.format(dominant_color[0], dominant_color[1], dominant_color[2])
        return hex_color
    except Exception as e:
        print(f"이미지에서 색상 추출 중 오류 발생: {e}")
        return None

# 날짜 파싱 함수 (연도가 포함된 경우 처리)
def parse_reception_period(period_str):
    try:
        current_year = datetime.now().year
        period_str = re.sub(r'\(\w+\)', '', period_str).strip()
        start_str, end_str = period_str.split(" ~ ")

        if '년' in start_str:
            start_date = datetime.strptime(start_str.strip(), "%Y년 %m월 %d일")
        else:
            start_date = datetime.strptime(f"{current_year}년 {start_str.strip()}", "%Y년 %m월 %d일")

        if '년' in end_str:
            end_date = datetime.strptime(end_str.strip(), "%Y년 %m월 %d일")
        else:
            end_month = int(end_str.split("월")[0].strip())
            if end_month < start_date.month:
                end_date = datetime.strptime(f"{current_year + 1}년 {end_str.strip()}", "%Y년 %m월 %d일")
            else:
                end_date = datetime.strptime(f"{current_year}년 {end_str.strip()}", "%Y년 %m월 %d일")

        return {
            "start_date": start_date.date().isoformat(),
            "end_date": end_date.date().isoformat()
        }
    except Exception as e:
        print(f"날짜 파싱 중 오류 발생: {e}")
        return None

# 페이지에서 데이터를 크롤링하는 함수 (카테고리별로 최대 수집 개수를 전달)
def crawl_page(url, main_category, max_items):
    driver.get(url)
    time.sleep(3)
    total_collected = 0
    last_height = driver.execute_script("return document.body.scrollHeight")

    while total_collected < max_items:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)

        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_all_elements_located((By.XPATH, '//*[@class="list"]/*[@class="item"]'))
            )
            lis = driver.find_elements(By.XPATH, '//*[@class="list"]/*[@class="item"]')
            if total_collected >= len(lis):
                print("더 이상 로드할 게시물이 없습니다.")
                break
        except TimeoutException:
            print(f"로드 시간 초과로 데이터가 불완전할 수 있습니다: {url}")
            break

        for li in lis[total_collected:]:
            if total_collected >= max_items:
                break

            retries = 3
            while retries > 0:
                try:
                    driver.implicitly_wait(5)
                    title = li.find_element(By.XPATH, './/h2').text
                    company = li.find_element(By.XPATH, './/*[@class="company"]').text
                    view_count_text = li.find_element(By.XPATH, './/*[@class="viewcount"]').text
                    # 쉼표 제거 후 숫자로 변환
                    view_count = int(view_count_text.replace(",", ""))
                    thumbnail_url = li.find_element(By.XPATH, './/figure').get_attribute("data-image")
                    detail_link = li.find_element(By.XPATH, './/a[@href]').get_attribute("href")

                    if detail_link.startswith("/"):
                        detail_link = base_url + detail_link

                    driver.get(detail_link)
                    time.sleep(3)

                    reception_period = parse_reception_period(
                        driver.find_element(By.XPATH, '//h2[text()="접수 기간"]/following-sibling::p[@class="indent"]').text
                    )

                    award_info_sections = driver.find_elements(By.XPATH, '//h2[text()="시상"]/following-sibling::p[@class="indent"]')
                    award_info_list = [award_info.text for award_info in award_info_sections]
                    award_info = " / ".join(award_info_list)

                    dominant_color = get_image_dominant_color(thumbnail_url)

                    description = driver.find_element(By.CLASS_NAME, 'description').text

                    # 홈페이지 URL 추출
                    homepage_url = detail_link

                    # 등록일 설정
                    registration_date = reception_period["start_date"]

                    driver.back()
                    time.sleep(3)

                    results = {
                        "title": title,
                        "company": company,
                        "view_count": view_count,  # 숫자로 변환된 view_count
                        "thumbnail_url": thumbnail_url,
                        "reception_period": reception_period,
                        "award_info": award_info,
                        "dominant_color": dominant_color,
                        "description": description,
                        "main_category": main_category,
                        "homepage_url": homepage_url,
                        "registration_date": registration_date
                    }

                    all_content.append(results)
                    print(f"추가된 게시물: {title}")
                    total_collected += 1
                    break

                except StaleElementReferenceException:
                    retries -= 1
                    print(f"크롤링 재시도중... ({3 - retries} / 3)")
                    time.sleep(1)

                except Exception as e:
                    print(f"게시물 정보를 가져오는 중 오류 발생: {e}")
                    break

# 크롤링 수행 (카테고리별로 최대 수집 개수를 전달)
for url, main_category in url_list:
    if main_category == "contest":
        crawl_page(url, main_category, max_contest_items)
    elif main_category == "activity":
        crawl_page(url, main_category, max_activity_items)

driver.quit()

# 추가 카테고리 데이터 입력
def add_categories(data):
    field_list = ["분야", "활동", "주최", "활동기간", "지역", "학과", "시상규모", "수상혜택", "응모대상", "주최기관"]
    field_mapping = {
        "분야": "field",
        "활동": "activity",
        "주최": "host",
        "활동기간": "duration",
        "지역": "region",
        "학과": "department",
        "시상규모": "prize_amount",
        "수상혜택": "prize_benefit",
        "응모대상": "target",
        "주최기관": "organizer"
    }

    for item in data:
        if item["main_category"] == "activity":
            item["field"] = random.choice(["서포터즈", "해외탐방-무료", "해외탐방-유료", "봉사단-해외", "봉사단-국내", "마케터", "기자단", "강연", "멘토링", "기타"])
            item["activity"] = random.choice(["행사 봉사", "지역 봉사", "온라인 캠페인", "멘토링 활동", "해외 탐방", "국내 탐방", "모금 활동", "교육 강연", "마케팅 업무"])
            item["host"] = random.choice(["대기업", "중소기업", "공공기관/공기업", "외국계기업", "중견기업", "비영리단체/협회/재단", "스타트업", "금융권", "병원", "동아리/학생자치단체", "기타"])
            item["duration"] = random.choice(["3개월 이하", "3개월~6개월", "6개월~1년", "1년 이상"])
            item["region"] = random.choice(["지역 제한없음", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "경기", "강원", "충청", "전라", "경상", "제주", "세종", "해외"])
        elif item["main_category"] == "contest":
            item["department"] = random.choice(["어문계열", "인문계열", "공학계열", "경영/경제", "의료계열", "미디어/광고", "소프트웨어/AI", "디자인", "환경/에너지", "식품/생명", "사회/공헌", "국제/해외", "건축/시스템설계", "수리/과학", "음악", "스포츠", "교육"])
            item["prize_amount"] = random.choice(["1천만원 미만", "1천만원~3천만원", "3천만원~5천만원", "5천만원 이상"])
            item["prize_benefit"] = random.choice(["입사시 가산점", "인턴/정규직채용", "해외연수", "전시기회", "실제상용화", "상장 수여", "기타"])
            item["target"] = random.choice(["청소년", "대상 제한 없음", "대학생", "직장인/일반인"])
            item["organizer"] = random.choice(["대기업", "중소기업", "공공기관/공기업", "외국계기업", "중견기업", "비영리단체/협회/재단", "스타트업", "금융권", "병원", "동아리/학생자치단체", "기타"])

    return data

# JSON 파일로 저장하는 함수
def save_to_json(data, filename):
    file_path = filename
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Data saved to {file_path}.")

# 데이터 저장
all_content = add_categories(all_content)
save_to_json(all_content, "activity_contest.json")