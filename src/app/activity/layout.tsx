import { Suspense } from 'react';
import CategoryHeader from '@/components/common/CategoryHeader';

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <CategoryHeader />
      </Suspense>
      {children}
    </>
  );
}
