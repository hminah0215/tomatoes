// src/app/magazine/page.tsx

import Image from 'next/image';

import CurrentHighlights from '@/containers/magazine/CurrentHighlights';
import MagazineList from '@/containers/magazine/MagazineList';

const MagazinePage = () => {
  return (
    <div className="bg-white">
      {/* 배너 이미지 추가 */}
      <div className="relative mb-[106px] mt-[66px] h-full w-full">
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
