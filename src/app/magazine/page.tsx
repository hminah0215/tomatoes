// src/app/magazine/page.tsx

import Image from 'next/image';

import CurrentHighlights from './components/CurrentHighlights';
import MagazineList from './components/MagazineList';

const MagazinePage = () => {
  return (
    <div className="bg-white ml-[88px] mr-[88px]">
      {/* 배너 이미지 추가 */}
      <div className="relative w-full max-w-[1264px] mx-auto mt-[66px] mb-[106px]">
        <Image
          src="/assets/magazine/PC_magazine_banner.svg"
          alt="매거진 배너"
          width={1264}
          height={478}
        />
      </div>
      <CurrentHighlights />
      <MagazineList />
    </div>
  );
};

export default MagazinePage;
