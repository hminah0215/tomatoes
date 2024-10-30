import ActivityContestItem from '@/components/ui/grid/ActivityContestItem';
import Pagination from '@/components/ui/pagination/Pagination';
import { fetchActivityContestAbstracts } from '@/lib/fetchActivityContestAbstracts';
import { Suspense } from 'react';

export default async function Page() {
  const { data: activitiesContests, error } =
    await fetchActivityContestAbstracts();

  console.log(activitiesContests, error);

  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <Pagination
          contents={activitiesContests || []} // null일 경우 빈 배열로 기본값 설정
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
