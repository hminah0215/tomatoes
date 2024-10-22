// src/app/magazine/page.tsx

import MagazineHeader from './components/MagazineHeader';
import CurrentHighlights from './components/CurrentHighlights';
import MagazineList from './components/MagazineList';

const MagazinePage = () => {
  return (
    <div className="relative bg-white">
      <MagazineHeader />
      <CurrentHighlights />
      <MagazineList />
    </div>
  );
};

export default MagazinePage;
