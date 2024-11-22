# 🍅 토마토들

🔗 [토마토들 서비스 바로가기](https://tomatoes-lemon.vercel.app/)

## 1. 토마토들 서비스 소개

**🍅 토마토들 🍅**은 대학생들이 참여할 수 있는 공모전과 대외활동에 관한 정보를 손쉽게 찾을 수 있도록 제공하고, 취업과 대학 생활에 도움이 되는 다양한 정보를 안내하는 서비스입니다.

## 2. 프로젝트 수행 배경 및 필요성

**1. 대학생들의 대외활동 정보 접근성 향상**

- 대학생들이 산재된 대외활동 정보를 손쉽게 찾아, 다양한 경험을 촉진시킴.

**2. 산학 협력 강화**

- 기업 연계 프로젝트 참여를 통해 대학생들에게 실질적인 도움을 제공함.
- 산업 현장의 요구사항을 반영한 서비스를 제공함.

## 3. 팀 소개

|                                                  [강동훈](https://github.com/starcradle101)                                                   |                                                  [박기태](https://github.com/kitae0831)                                                   |                                                  [정지수](https://github.com/StopSoo)                                                   |                                                  [현민아](https://github.com/hminah0215)                                                   |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |

| <img src="https://github.com/user-attachments/assets/d4b2cab0-471c-4b62-97ff-8f199b22bd1f" width="150" /> | <img src="https://github.com/user-attachments/assets/c84ae4c0-7093-41b3-9ae4-ea8446a4a27d" width="150" /> | <img src="https://github.com/user-attachments/assets/b3a6d633-e12e-43e5-a22b-81ff3ba26584" width="150" /> | <img src="https://github.com/user-attachments/assets/62463e6d-445c-4b9a-827b-104b689d99c1" width="150" /> |


## 4. 역할 분담

### 🦸🏻‍♂️ [starcradle101](https://github.com/starcradle101)

#### 공모전/대외활동 (Contest/Activity)

- 기능
  - 사용자가 필터와 정렬 기능을 사용해 원하는 공모전 또는 대외활동 컨텐츠만 확인 가능.
- 구성 요소
  - 필터 및 정렬: 주제별 / 카테고리별 필터링과 정렬 옵션 제공.
  - 카드 뷰: 카드 형태의 대외활동 / 공모전 진열.
  - 상세 페이지: 개별 활동의 상세 정보 제공.

### 🧑🏻‍🔬 [kitae0831](https://github.com/kitae0831)

#### 검색 (Search)

- 기능
  - 사용자가 검색어를 입력하면 해당하는 컨텐츠를 필터링하여 검색 결과 페이지에 보여줌.
- 구성 요소
  - 검색 바: 키워드 입력을 위한 UI.
  - 결과 표시 영역: 매거진, 공모전, 대외활동 등 검색 결과 표시.
  - 결과 없음 표시: 관련 컨텐츠가 없는 경우 안내 메시지 표시.

### 👩🏻‍🎨 [StopSoo](https://github.com/StopSoo)

#### 홈페이지 (Home)

- 기능
  - 공모전, 대외활동, 매거진 컨텐츠를 한 페이지에 모아 한 눈에 보여줌.
- 구성 요소
  - 랜덤 메인 슬라이더: 공모전, 대외활동 공고를 랜덤으로 선별하여 자동 슬라이더 형태로 제공.
  - `BEST PICK` / `토마토들 추천 활동`: 높은 조회수 순의 공모전, 마감일 가까운 순의 대외활동 공고들을 선별하여 홈 화면에서 제공.
  - 공모전 / 대외활동 컨텐츠 카드 슬라이더: 공모전, 대외활동 공고들을 카드 슬라이더 형태로 제공.
  - 매거진: 매거진 페이지에서 기사를 선별해 링크업 형태로 제공.

### 👩🏻‍🎤 [hminah0215](https://github.com/hminah0215)

#### 매거진 (Magazine)

- 기능
  - `토마토 PICK`, `토마토 TIP`과 같은 탭을 통해 사용자가 다양한 컨텐츠를 탐색할 수 있도록 함.
- 구성 요소
  - 카테고리 탭: 토마토Pick, 토마토Tip.
  - 카드 뷰: 각 컨텐츠를 카드 형식으로 진열.
  - 상세 페이지: 개별 컨텐츠의 자세한 정보 제공.

#### 데이터 크롤링 및 자동화 (Data Crawling & Automation)

- 기능
  - 매거진에서 사용되는 데이터를 자동으로 크롤링 및 업로드하여 최신 데이터를 유지.
  - `토마토 TIP`, `토마토 PICK`과 같은 탭에서 활용되는 데이터를 기반으로 사용자에게 다양한 콘텐츠 제공.

- 구현 내용
  - 파이썬 크롤링 및 데이터 자동화
    - [링커리어](https://linkareer.com/)에서 100개의 데이터를 크롤링하는 파이썬 스크립트를 작성.
    - Supabase 데이터베이스에 **기존 데이터와 중복되지 않는 데이터만 삽입**되도록 구현.
    - 이 모든 과정은 **GitHub Actions**를 통해 자동으로 실행되며, 정기적으로 최신 데이터를 유지.

## 5. 주요 기능

#### 1. 홈 (Home)

- 공모전 / 대외활동 / 매거진을 한 페이지에 정리해서 보여줌.
- 최상단에 위치한 랜덤 메인 슬라이더로 다양한 공고들에 대한 정보를 제공함.

#### 2. 매거진 (Magazine)

- 매거진 정보를 진열하여 `토마토 Pick`, `토마토 Tip`과 같은 다양한 탭을 통해 컨텐츠를 확인할 수 있고, 데이터 크롤링을 진행하여 실제 데이터를 보여줌.
- 컨텐츠를 클릭하면, 매거진 상세 페이지로 이동해서 해당 컨텐츠를 확인할 수 있음.

#### 3. 공모전/대외활동 (Contest/Activity)

- 공모전, 대외활동 정보를 확인할 수 있으며, 필터 및 정렬 기능을 사용해원하는 컨텐츠만 확인할 수 있음.
- 컨텐츠를 클릭하면, 공모전/대외활동 상세 페이지로 이동해서 해당 컨텐츠를 확인할 수 있음.

#### 4. 검색 (Search)

- 사용자가 원하는 검색어를 입력하면, 검색 결과 페이지에서 해당되는 정보를 확인할 수 있음.
- 검색 결과가 없다면, 이에 해당하는 컴포넌트를 표시해 사용자가 알 수 있도록 했음.

## 6. 커밋 컨벤션 및 브랜치 전략

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

`GitHubFlow`: 비교적 단순하고 직관적인 구조를 가지고 있어, 작은 규모의 단기간 프로젝트에 팀원들이 쉽게 학습하고 적용할 수 있어 이 전략을 선택하였습니다. 단, 최소한의 안정성을 위해 `main` 브랜치에 직접 배포하지 않고 `dev` 브랜치를 생성해 작업했습니다.

## 7. 개발 환경

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
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff" />
</div>

<h3 align='center'>Collaboration</h3>
<div align='center'>
  <img alt="Notion" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
  <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
  <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
</div>

## 8. 폴더 구조

```
tomatoes
├─ public
│  ├─ assets
│  │  ├─ common
│  │  ├─ cs
│  │  ├─ homePage
│  │  ├─ intro
│  │  ├─ magazine
│  │  ├─ noResult
│  │  ├─ pagination
│  └─ fonts
├─ src
│  ├─ app
│  │  ├─ activity
│  │  │  └─ [id]
│  │  ├─ api
│  │  │  ├─ uploadData
│  │  │  └─ uploadMagazine
│  │  ├─ contest
│  │  │  └─ [id]
│  │  ├─ cs
│  │  ├─ intro
│  │  ├─ magazine
│  │  │  ├─ magazineGallery
│  │  │  ├─ magazineReport
│  │  │  └─ tomatoTip
│  │  │     └─ [id]
│  │  └─ search
│  ├─ components
│  │  ├─ common
│  │  ├─ skeleton
│  │  └─ ui
│  │     ├─ grid
│  │     ├─ navigation
│  │     └─ pagination
│  ├─ constants
│  ├─ containers
│  │  ├─ activity
│  │  ├─ contest
│  │  ├─ cs
│  │  ├─ home
│  │  ├─ intro
│  │  ├─ magazine
│  │  └─ search
│  ├─ hooks
│  ├─ lib
│  ├─ scripts
│  ├─ store
│  ├─ types
│  └─ utils
```

## 9. 참고 자료

### 데이터 크롤링

- 링커리어: https://linkareer.com/
- 캠퍼스픽: https://www.campuspick.com/activity
