import requests
from bs4 import BeautifulSoup
import json

# 크롤링할 기본 URL
base_url = "https://community.linkareer.com/honeytips?word=&field=&page={}"

# 크롤링할 페이지 수 (크롤링할 기본 URL 한페이지에 20개의 글이 존재하는 상태)
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

                # 게시물 제목(h2) 추출
                title_element = post.select_one('h2')
                title = title_element.text if title_element else 'No title'

                # 글쓴이 정보 추출
                author_element = post.select_one('td.rc-table-cell.column-visible h3')  # 글쓴이
                author = author_element.text.strip() if author_element else 'Unknown'

                # 작성일 정보 추출
                created_at_element = post.select_one('td.rc-table-cell[title] div')  # 작성일
                created_at = created_at_element.text.strip() if created_at_element else 'Unknown'

                # 상세 페이지로 이동하여 게시글 HTML 내용 가져오기
                detail_response = requests.get(full_link)
                detail_soup = BeautifulSoup(detail_response.content, 'html.parser')

                # HTML 내용 추출
                content_div = detail_soup.select_one('div.post-detail')
                content = str(content_div) if content_div else 'No content available'

                tomatoTip_data.append({
                    'title': title,
                    'link': full_link,
                    'content': content,
                    'author': author,
                    'created_at': created_at
                })

            except Exception as e:
                print(f"Error occurred while processing a post: {e}")
                continue

    else:
        print(f"Failed to fetch page {page}, status code: {response.status_code}")

# JSON 파일로 저장
output_file_path = 'scripts/tomatoTip_data.json'  
with open(output_file_path, 'w', encoding='utf-8') as f:
    json.dump(tomatoTip_data, f, ensure_ascii=False, indent=4)

print(f"총 {len(tomatoTip_data)}개의 게시글을 가져왔습니다.")
