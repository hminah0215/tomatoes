type Activity = {
  imageUrl: string; // 이미지 URL
  title: string; // 제목
  organization: string; // 주최 기관
  dDay: string; // 마감 디데이
  receptionPeriod: string; // 신청 날짜 (예: '10월 9일(수) ~ 10월 18일(금)')
  category: '대외활동' | '공모전' | '교육・강연';
  viewCount: number;
};

type Activities = Activity[];
