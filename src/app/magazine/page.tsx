// src/app/magazine/page.tsx

import Image from 'next/image';

import CurrentHighlights from '@/containers/magazine/CurrentHighlights';
import MagazineList from '@/containers/magazine/MagazineList';

const MagazinePage = () => {
  return (
    <div className="bg-white">
      {/* 배너 이미지 추가 */}
      <div className="mb-[42px] mt-[10px] h-full w-full md:mx-[88px] md:mb-[106px] md:mt-[66px]">
        <Image
          src="/assets/magazine/PC_magazine_banner.svg"
          alt="매거진 PC 배너"
          width={1264}
          height={478}
          className="hidden object-cover md:block"
        />
        <Image
          src="/assets/magazine/MO_magazine_banner.svg"
          alt="매거진 MO 배너"
          width={393.51}
          height={148.81}
          className="block w-full object-cover md:hidden"
        />
      </div>
      <CurrentHighlights />
      <MagazineList />
    </div>
  );
};

export default MagazinePage;
