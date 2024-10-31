import Image from 'next/image';
import CurrentHighlights from '@/containers/magazine/CurrentHighlights';
import MtomatoPick from '@/containers/magazine/MtomatoPick';

const MagazinePage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="px-[28px] mb-[42px] mt-[10px] h-full w-full md:px-[88px] md:mb-[106px] md:mt-[66px]">
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
        <div className="px-[28px] mt-20 h-full w-full md:px-[88px]">
          <div className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
            지금 꼭 봐야하는 매거진
          </div>
          <CurrentHighlights />

          <div className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
            토마토 Pick
          </div>
          <MtomatoPick />
        </div>
      </div>
    </>
  );
};

export default MagazinePage;
