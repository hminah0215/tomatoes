import MagazineHeader from '@/containers/magazine/MagazineHeader';

const MagazineLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[88px] pt-[74px]">
      <MagazineHeader />
      {children}
    </div>
  );
};

export default MagazineLayout;
