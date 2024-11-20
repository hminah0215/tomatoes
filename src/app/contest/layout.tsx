import { Suspense } from 'react';
import CategoryHeader from '@/components/common/CategoryHeader';
import ActivityContestLoading from './loading';

export default function ContestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CategoryHeader />
      <Suspense fallback={<ActivityContestLoading />}>{children}</Suspense>
    </>
  );
}
