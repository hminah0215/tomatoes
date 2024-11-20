import { Suspense } from 'react';
import CategoryHeader from '@/components/common/CategoryHeader';
import ActivityContestLoading from './loading';
import CategoryHeaderSkeleton from '@/components/skeleton/CategoryHeaderSkeleton';

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<CategoryHeaderSkeleton />}>
        <CategoryHeader />
      </Suspense>
      <Suspense fallback={<ActivityContestLoading />}>{children}</Suspense>
    </>
  );
}
