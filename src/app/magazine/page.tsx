// src/app/magazine/page.tsx

import Image from 'next/image';

import CurrentHighlights from './components/CurrentHighlights';
import MagazineList from './components/MagazineList';

const MagazinePage = () => {
  return (
    <div className="ml-[88px] mr-[88px] bg-white">
      {/* 배너 이미지 추가 */}
      <div className="relative mx-auto mb-[106px] mt-[66px] w-full max-w-[1264px]">
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
