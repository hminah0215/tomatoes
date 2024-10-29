import ActivityContestItem from '@/components/ui/grid/ActivityContestItem';
import CategoryPanel from '@/containers/activity/CategoryPanel';
import Pagination from '@/components/ui/pagination/Pagination';
import { Suspense } from 'react';

export default function Page() {
  const dummyActivities: ActivityContestDetailsProps[] = Array.from(
    { length: 100 },
    (_, i) => ({
      imageUrl: '/assets/test_image.png',
      title: `활동 타이틀 ${i + 1}`,
      organization: `주최 기관 ${i + 1}`,
      dDay: `${Math.floor(Math.random() * 30)}`, // 0 ~ 29일 랜덤 마감일
      receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
      category: i % 2 === 0 ? '대외활동' : '공모전', // '교육・강연' 제거, 대외활동과 공모전만 사용
      viewCount: `${Math.floor(Math.random() * 5000) + 1000}`, // 1000 ~ 6000 랜덤 조회수 (string으로 변환)
      detailUrl: `/activities/${i + 1}`, // detailUrl 추가
    })
  );

  return (
    <>
      <CategoryPanel />
      <Suspense fallback={<div>로딩 중...</div>}>
        <Pagination
          contents={dummyActivities} // 데이터를 Pagination에 전달
          GridItem={ActivityContestItem} // 그리드 아이템 컴포넌트 전달
          webItemPerPage={16}
          mobileItemPerPage={10}
          columnStyle="web4mobile2"
          gapStyle="gapStyle2" // 그리드 gap 스타일 설정
        />
      </Suspense>
    </>
  );
}
