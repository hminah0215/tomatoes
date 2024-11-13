import ActivityContestItem from '@/components/ui/grid/ActivityContestItem';
import Pagination from '@/components/ui/pagination/Pagination';
import NoFilterResult from '@/components/common/noFilterResult';
import { Suspense } from 'react';

interface ActivityProps {
  activities: ActivityContestData[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

export default function Activity({ activities, pagination }: ActivityProps) {
  if (activities.length === 0) {
    return <NoFilterResult />;
  }

  return (
    <div className="px-7 md:px-[88px]">
      <Suspense fallback={<div>로딩 중...</div>}>
        <Pagination
          items={activities}
          GridItem={ActivityContestItem}
          columnStyle="web4mobile2"
          gapStyle="gapStyle2"
          pagination={pagination}
        />
      </Suspense>
    </div>
  );
}
