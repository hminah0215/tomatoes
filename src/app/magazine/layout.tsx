// import MagazineHeader from '@/containers/magazine/MagazineHeader';
import CategoryHeader from '@/components/common/CategoryHeader';
import { Suspense } from 'react';

const MagazineLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<div>로딩 중...</div>}>
        <CategoryHeader />
      </Suspense>
      {children}
    </div>
  );
};

export default MagazineLayout;
