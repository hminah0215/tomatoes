// import MagazineHeader from '@/containers/magazine/MagazineHeader';
import CategoryHeader from '@/components/common/CategoryHeader';

const MagazineLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CategoryHeader />
      {children}
    </div>
  );
};

export default MagazineLayout;
