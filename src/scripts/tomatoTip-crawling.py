import requests
from bs4 import BeautifulSoup
import json
import os
import re  # 정규식을 사용하기 위한 모듈
from datetime import date


# 크롤링할 기본 URL
base_url = "https://community.linkareer.com/honeytips?word=&field=&page={}"

# 크롤링할 페이지 수 (크롤링할 기본 URL 한 페이지에 20개의 글이 존재하는 상태)
total_pages = 5

tomatoTip_data = []

for page in range(1, total_pages + 1):
    # 각 페이지 URL 생성
    url = base_url.format(page)

    # HTTP GET 요청 보내기
    response = requests.get(url)

    # 요청이 성공했는지 확인
    if response.status_code == 200:
        print(f"Page {page} fetched successfully")

        # 페이지 소스 파싱
        soup = BeautifulSoup(response.content, 'html.parser')

        # 게시물 리스트 찾기 (tr.rc-table-row)
        honey_tips = soup.select('tr.rc-table-row')

        for post in honey_tips:
            try:
                # 게시물 번호 확인
                post_number = post.select_one('td.rc-table-cell').text
                if not post_number.isdigit():  # 번호가 없는 경우 (공지사항), 스킵
                    continue

                # 게시물의 링크 추출
                link_element = post.select_one('a')
                link = link_element['href'] if link_element else ''
                full_link = f"https://community.linkareer.com{link}" if link.startswith('/') else link

                # link 뒷 부분 page 파라미터 제거
                clean_link = re.sub(r'\?page=\d+', '', full_link)


                # 게시물 제목(h2) 추출
                title_element = post.select_one('h2')
                title = title_element.text if title_element else 'No title'

                # 글쓴이 정보 추출
                author_element = post.select_one('td.rc-table-cell.column-visible h3')  # 글쓴이
                author = author_element.text.strip() if author_element else 'Unknown'

                # 작성일 정보 추출
                created_at_element = post.select_one('td.rc-table-cell[title] div')  # 작성일
                created_at = created_at_element.text.strip() if created_at_element else 'Unknown'

                # 작성일 형식 처리
                if re.match(r'^\d{2}:\d{2}$', created_at):  # "00:54" 같은 형식인지 확인
                    current_date = date.today().strftime('%Y-%m-%d')  # 현재 날짜 가져오기
                    created_at = f"{current_date} {created_at}:00"  # 날짜 + 시간 + 초 추가
                elif re.match(r'^\d{4}-\d{2}-\d{2}$', created_at):  # 날짜만 있는 경우
                    created_at = f"{created_at} 00:00:00"  # 기본 시간 추가
                elif created_at == 'Unknown':
                    created_at = None  # 알 수 없는 경우


                # 상세 페이지로 이동하여 게시글 HTML 내용 가져오기
                detail_response = requests.get(full_link)
                detail_soup = BeautifulSoup(detail_response.content, 'html.parser')

                # HTML 내용 추출
                content_div = detail_soup.select_one('div.post-detail')
                content = str(content_div) if content_div else 'No content available'

                # 조회수 정보 추출 및 숫자만 가져오기
                views_element = detail_soup.select_one('span.views')
                views_text = views_element.text.strip() if views_element else '0'
                views = re.search(r'\d+', views_text)  # 조회수에서 숫자만 추출
                views = views.group() if views else '0'

                # 인라인 스타일 제거
                content_soup = BeautifulSoup(content, 'html.parser')
                for tag in content_soup.find_all(True):  # 모든 태그를 찾고
                    if 'style' in tag.attrs:
                        del tag.attrs['style']  # style 속성 제거하기

                cleaned_content = str(content_soup)  # 스타일 속성을 제거한 html태그로 변환

                tomatoTip_data.append({
                    'title': title,
                    'link': clean_link,  # page 파라미터가 제거된 링크
                    'content': cleaned_content,  # 인라인 스타일이 제거된 콘텐츠
                    'author': author,
                    'created_at': created_at,
                    'views': views  # 조회수 숫자만 저장
                })

            except Exception as e:
                print(f"Error occurred while processing a post: {e}")
                continue

    else:
        print(f"Failed to fetch page {page}, status code: {response.status_code}")

# JSON 파일로 저장할 경로 설정
output_file_path = os.path.join(os.path.dirname(__file__), 'tomatoTip_data.json')

with open(output_file_path, 'w', encoding='utf-8') as f:
    json.dump(tomatoTip_data, f, ensure_ascii=False, indent=4)

print(f"총 {len(tomatoTip_data)}개의 게시글을 가져왔습니다.")

