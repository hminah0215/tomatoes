import Image from 'next/image';
import CurrentHighlights from '@/containers/magazine/CurrentHighlights';
import MtomatoPick from '@/containers/magazine/MtomatoPick';
import { Suspense } from 'react';

const MagazinePage = () => {
  return (
    <>
      <div className="bg-white">
        {/* 배너 이미지 추가 */}
        <div className="mb-[42px] mt-[10px] h-full w-full px-[28px] md:mb-[106px] md:mt-[66px] md:px-[88px]">
          <Image
            src="/assets/magazine/PC_magazine_banner.svg"
            alt="매거진 PC 배너"
            width={1264}
            height={478}
            className="hidden w-full object-cover md:block"
          />
          <Image
            src="/assets/magazine/MO_magazine_banner.svg"
            alt="매거진 MO 배너"
            width={393.51}
            height={148.81}
            className="block w-full object-cover md:hidden"
          />
        </div>
        <div className="mt-20 h-full w-full px-[28px] md:px-[88px]">
          <div className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
            지금 꼭 봐야하는 매거진
          </div>
          <CurrentHighlights />

          {/* Suspense로 MtomatoPick 감싸기 */}
          <Suspense fallback={<div>Loading...</div>}>
            <MtomatoPick />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MagazinePage;
