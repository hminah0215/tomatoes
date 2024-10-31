import ActivityContestItem from '@/components/ui/grid/ActivityContestItem';
import Pagination from '@/components/ui/pagination/Pagination';
import NoFilterResult from '@/components/common/noFilterResult';
import { Suspense } from 'react';

interface ContestProps {
  activitiesContests: ContestActivityData[];
}

export default function Contest({ activitiesContests }: ContestProps) {
  if (activitiesContests.length === 0) {
    return <NoFilterResult />;
  }

  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <div className="px-7 md:px-[88px]">
          <Pagination
            contents={activitiesContests}
            GridItem={ActivityContestItem}
            webItemPerPage={16}
            mobileItemPerPage={10}
            columnStyle="web4mobile2"
            gapStyle="gapStyle2"
          />
        </div>
      </Suspense>
    </>
  );
}
