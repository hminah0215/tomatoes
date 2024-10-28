// 조금 더 구체화된 데이터 작성해보기

type ActivityContestDetailsProps = {
  title: string;
  organization: string;
  dDay: string;
  receptionPeriod: string; // 접수 기간
  category: '대외활동' | '공모전'; // 카테고리 추가
  viewCount: string; // 조회수 추가
  imageUrl: string;
  detailUrl: string;
};

// 필터에 해당하는 filterCategory
// 탭에 해당하는 tabCategory
// 메인에 해당하는 mainCategory
// 조회수 숫자로 바꾸세요
// 그리고 format해서 가져오면 됨
