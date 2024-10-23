import MagazineHeader from './components/MagazineHeader';

const MagazineLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MagazineHeader />
      {children}
    </div>
  );
};

export default MagazineLayout;
