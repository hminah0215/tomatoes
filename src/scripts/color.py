import requests
from io import BytesIO
from PIL import Image
from colorthief import ColorThief
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException, TimeoutException
import time
import json

# 기본 URL 설정
base_url = "https://www.campuspick.com"

# 크롤링한 데이터를 모아두는 리스트
contest_content = []
activity_content = []

# 캠퍼스픽 공모전 페이지 url
contest_url = "https://www.campuspick.com/contest"
# 캠퍼스픽 대외활동 페이지 url
activity_url = "https://www.campuspick.com/activity"
url_list = [(contest_url, contest_content), (activity_url, activity_content)]

# ChromeDriver 실행
try:
    driver = webdriver.Chrome()
except Exception as e:
    print("Error starting Chrome:", e)
    exit(1)

# 최대 30개의 게시물만 수집
max_items = 100

# 이미지에서 주요 색상을 추출하는 함수
def get_image_dominant_color(image_url):
    try:
        response = requests.get(image_url)
        img = Image.open(BytesIO(response.content))
        color_thief = ColorThief(BytesIO(response.content))
        dominant_color = color_thief.get_color(quality=1)

        # RGB를 헥사코드로 변환
        hex_color = '#{:02x}{:02x}{:02x}'.format(dominant_color[0], dominant_color[1], dominant_color[2])
        return hex_color
    except Exception as e:
        print(f"이미지에서 색상 추출 중 오류 발생: {e}")
        return None

# 페이지에서 데이터를 크롤링하는 함수
def crawl_page(url, data_list):
    driver.get(url)
    time.sleep(3)  # 페이지가 완전히 로드되도록 3초 대기

    try:
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@class="list"]/*[@class="item"]')))
        lis = driver.find_elements(By.XPATH, '//*[@class="list"]/*[@class="item"]')
    except TimeoutException:
        print(f"리스트 항목을 찾는 중 시간 초과: {url}")
        return
    except Exception as e:
        print(f"리스트 항목을 찾는 중 오류 발생: {e}")
        return

    if not lis:
        print("리스트 항목이 없습니다.")
        return

    for li in lis[:max_items]:  # 최대 max_items 개수만 수집
        retries = 3  # 최대 재시도 횟수
        while retries > 0:
            try:
                # 웹 요소들이 현재 DOM에서 유효한지 확인
                driver.implicitly_wait(5)  # 요소를 찾기 위한 최대 대기 시간
                keywords = li.find_elements(By.XPATH, './/*[@class="badges"]/span')
                keyword_str = ",".join([keyword.text for keyword in keywords])
                title = li.find_element(By.XPATH, './/h2').text
                company = li.find_element(By.XPATH, './/*[@class="company"]').text
                view_count = li.find_element(By.XPATH, './/*[@class="viewcount"]').text
                thumbnail_url = li.find_element(By.XPATH, './/figure').get_attribute("data-image")
                detail_link = li.find_element(By.XPATH, './/a[@href]').get_attribute("href")

                if detail_link.startswith("/"):
                    detail_link = base_url + detail_link

                # 상세 페이지로 이동
                driver.get(detail_link)
                time.sleep(3)

                # 접수 기간 가져오기
                try:
                    reception_period_section = driver.find_element(By.XPATH, '//h2[text()="접수 기간"]/following-sibling::p[@class="indent"]')
                    reception_period = reception_period_section.text
                except:
                    reception_period = "접수 기간 정보 없음"

                # 시상 정보 가져오기
                try:
                    award_info_sections = driver.find_elements(By.XPATH, '//h2[text()="시상"]/following-sibling::p[@class="indent"]')
                    award_info_list = [award_info.text for award_info in award_info_sections]
                    award_info = " / ".join(award_info_list)  # 시상 정보 문자열로 결합
                except:
                    award_info = "시상 정보 없음"

                # 이미지의 주요 색상 추출
                dominant_color = get_image_dominant_color(thumbnail_url)

                # 리스트로 돌아가기
                driver.back()
                time.sleep(3)

                results = {
                    "keywords": keyword_str,           # 키워드
                    "title": title,                    # 제목
                    "company": company,                # 주최사
                    "view_count": view_count,          # 조회수
                    "thumbnail_url": thumbnail_url,    # 썸네일 URL
                    "reception_period": reception_period,  # 접수 기간
                    "award_info": award_info,          # 시상 정보
                    "dominant_color": dominant_color   # 이미지의 주요 색상 추가
                }

                data_list.append(results)
                print(f"추가된 게시물: {title}")
                break  # 성공적으로 데이터를 가져오면 루프를 종료

            except StaleElementReferenceException:
                retries -= 1
                print(f"크롤링 재시도중... ({3 - retries} / 3)")
                time.sleep(1)  # 잠시 대기 후 재시도

            except Exception as e:
                print(f"게시물 정보를 가져오는 중 오류 발생: {e}")
                break  # 다른 예외 발생 시 재시도하지 않음

# 각 URL에 대해 크롤링 수행
for url, content_list in url_list:
    crawl_page(url, content_list)

driver.quit()

# 데이터를 저장하기 직전에 데이터 확인
# print("최종 contest_content 데이터:", contest_content)
# print("최종 activity_content 데이터:", activity_content)

# JSON 파일로 저장하는 함수
def save_to_json(data, filename):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Data saved to {filename}.")

# 데이터 저장
save_to_json(contest_content, "contest_1024.json")
save_to_json(activity_content, "activity_1024.json")
