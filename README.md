# 🍅 토마토들

🔗[토마토들 서비스 바로가기](https://tomatoes-lemon.vercel.app/)

## 1. 토마토들 서비스 소개

1.  대외활동을 준비하는 대학생을 위한 서비스 제공


    - 퍼저있는 대외활동을 한곳에 모아 서비스를 제공하고자 함

## 2. 프로젝트 수행 배경 및 필요성

1.  대학생들의 대외활동 정보 접근성 향상


    - 대학생들이 산재된 대외활동 정보를 손쉽게 찾아, 다양한 경험 촉진

2.  산학 협력 강화


    - 기업 연계 프로젝트 참여를 통해 대학생들에게 실질적인 도움 제공
    - 산업 현장의 요구사항을 반영한 서비스 제공

## 3. 팀 소개

|                             [starcradle101](https://github.com/starcradle101)                             |                                 [kitae0831](https://github.com/kitae0831)                                 |                                   [StopSoo](https://github.com/StopSoo)                                   |                                [hminah0215](https://github.com/hminah0215)                                |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/d4b2cab0-471c-4b62-97ff-8f199b22bd1f" width="150" /> | <img src="https://github.com/user-attachments/assets/d4b2cab0-471c-4b62-97ff-8f199b22bd1f" width="150" /> | <img src="https://github.com/user-attachments/assets/d4b2cab0-471c-4b62-97ff-8f199b22bd1f" width="150" /> | <img src="https://github.com/user-attachments/assets/d4b2cab0-471c-4b62-97ff-8f199b22bd1f" width="150" /> |

## 4. 역할 분담

### starcradle101

공모전/대외활동 - 기능 : 사용자가 필터와 정렬 기능을 통해 원하는 공모전 또는 대외활동 콘텐츠만 볼 수 있도록 함. - 구성 요소 :  필터 및 정렬 : 주제별/카테고리별 필터링과 정렬 옵션 제공
카드 뷰 : 각 활동이 카드 형식으로 진열됨
상세 페이지 : 개별 활동의 상세 정보 제공

### kitae0831

검색 - 기능 : 사용자가 검색어를 입력하면 해당하는 콘텐츠를 필터링하여 검색 결과 페이지에 보여줌. 결과가 없는 경우 이를 알려주는 컴포넌트를 표시. - 구성 요소 :  검색 바 : 키워드 입력을 위한 UI
결과 표시 영역 : 매거진, 공모전, 대외활동 등 검색 결과 표시
결과 없음 표시 : 관련 콘텐츠가 없는 경우 안내 메세지 표시

### StopSoo

홈페이지 - 기능 : 공모전, 대외활동, 매거진 콘텐츠를 모두 모아 랜덤 메인 슬라이더로 다채로운 주제를 보여줌 - 구성 요소 : 랜덤 슬라이더, 콘텐츠 카드 뷰

### hminah0215

매거진 - 기능 : 토마토Pick, 토마토Tip과 같은 탭을 통해서 사용자가 다양한 콘텐츠를 탐색할 수 있도록 함. 크롤링을 통해 자동으로 콘텐츠를 수집하여 보여줌. - 구성 요소 :  카테고리 탭 : 토마토Pick, 토마토Tip
카드 뷰 : 각 콘텐츠가 카드 형식으로 진열됨
상세 페이지 : 개별 콘텐츠의 자세한 정보 제공

## 5. 협업 방식

- Notion
- Discord
- Figma

## 6. 주요 기능

1. 홈


    - 공모전 / 대외활동 / 매거진을 보여주며, 랜덤 메인 슬라이더로 다양한 내용을 보여줌.

2. 매거진


    - 매거진 정보를 진열하여, 토마토Pick, 토마토Tip과 같은 다양한 탭을 통해 컨텐츠를 확인할 수 있고, 크롤링을 진행하여 데이터를 보여줌.
    - 콘텐츠를 클릭하면, 매거진 상세 페이지로 이동해서 해당 콘텐츠를 확인할 수 있음

3. 공모전/대외활동


    - 공모전, 대외활동 정보를 확인할 수 있으며, 필터 및 정렬 기능을 사용해원하는 콘텐츠만 확인할 수 있음.
    - 콘텐츠를 클릭하면, 공모전/대외활동 상세 페이지로 이동해서 해당 콘텐츠를 확인할 수 있음

4. 검색


    - 사용자가 원하는 검색어를 입력하면, 검색 페이지에서 해당하는 정보를 확인할 수 있음.
    - 검색 결과가 없다면, 이에 해당하는 컴포넌트를 표시해 사용자가 알 수 있도록 했음.

## 7. 커밋 컨벤션 및 브랜치 전략

### 커밋 컨벤션

```
#   init    : 프로젝트 초기 설정
#   chore   : 빌드 업무 수정, 패키지 매니저 수정, production code와 무관한 부분
#   comment : 주석 추가 및 빈경
#   design  : CSS 등 사용자 UI 변경
#   docs    : 문서 수정
#   feat    : 새로운 기능 추가
#   fix     : 버그 수정
#   refactor: 코드 리팩토링
#   remove  : 파일, 폴더 삭제
#   rename  : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우
#   revert  : 이전 커밋으로 되돌리는 작업
#   style   : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
#   test    : 테스트 코드, 리팩토링 테스트 코드 추가
```

### 브랜치 전략

**GitHubFlow**: 비교적 단순하고 직관적인 구조를 가지고 있어, 작은 규모의 단기간 프로젝트에 팀원들이 쉽게 학습하고 적용할 수 있어 이 전략을 선택하였습니다.

## 8. 개발 환경

<h3 align='center'>Frontend</h3>
<div align='center'>
  <img src="https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />

</div>

<h3 align='center'>Backend</h3>
<div align='center'>
  <img src="https://img.shields.io/badge/supabase-000000?style=for-the-badge&logo=supabase&logoColor=3FCF8E" />
</div>

<h3 align='center'>Collaboration</h3>
<div align='center'>
  <img alt="Notion" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
  <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
  <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
</div>

## 9. 폴더 구조

```markdown

```

## 10. 참고 자료
