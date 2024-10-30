import ActivityContestItem from '@/components/ui/grid/ActivityContestItem';
import Pagination from '@/components/ui/pagination/Pagination';
import { Suspense } from 'react';

interface ContestProps {
  activitiesContests: ContestActivityData[];
}

export default function Contest({ activitiesContests }: ContestProps) {
  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <Pagination
          contents={activitiesContests}
          GridItem={ActivityContestItem}
          webItemPerPage={16}
          mobileItemPerPage={10}
          columnStyle="web4mobile2"
          gapStyle="gapStyle2"
        />
      </Suspense>
    </>
  );
}
