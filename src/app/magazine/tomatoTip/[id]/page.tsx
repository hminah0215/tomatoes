import { fetchTomatoTipById } from '@/lib/fetchTomatoTip';
import TomatoTipDetail from '@/containers/magazine/TomatoTipDetail';
import NotFound from '@/app/not-found';
import Image from 'next/image';
import CurrentHighlights from '@/containers/magazine/CurrentHighlights';

const TomatoTipDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // URL의 id 파라미터를 가져옴
  // console.log('Fetched ID:', id); // ID가 잘 가져와지는지 확인
  const numericId = parseInt(id, 10); // 문자열을 숫자로 변환
  // console.log('Numeric ID:', numericId); // 변환된 ID 확인
  const { data: fetchedTip, error } = await fetchTomatoTipById(numericId);

  if (error || !fetchedTip) {
    return <NotFound />; // 데이터가 없으면 404 페이지 표시
  }

  return (
    <>
      <div className="relative">
        {/* 배너 이미지 */}
        <div className="relative mt-[23px] w-full overflow-hidden md:mt-[67px]">
          <Image
            src="/assets/magazine/PC_mzDetail_banner.svg"
            alt="PC 배너 이미지"
            width={1442}
            height={518}
            className="hidden w-full object-cover md:block"
          />
          <Image
            src="/assets/magazine/MO_mzDetail_banner.svg"
            alt="모바일 배너 이미지"
            width={375}
            height={171}
            className="block w-full object-cover md:hidden"
          />
        </div>
        {/* 왼쪽 배경 이미지 */}
        <div className="fixed bottom-[41.14px] left-0 z-[-1] hidden h-[598.86px] w-[489px] opacity-80 md:block">
          <Image
            src="/assets/magazine/PC_mzDetail_left.svg"
            alt="왼쪽 배경 이미지"
            width={212}
            height={599}
            className="pointer-events-none"
          />
        </div>
        {/* 오른쪽 배경 이미지 */}
        <div className="fixed right-0 top-[136.01px] z-[-1] hidden h-[202.03px] w-[191.22px] opacity-80 md:block">
          <Image
            src="/assets/magazine/PC_mzDetail_right.svg"
            alt="오른쪽 배경 이미지"
            width={191.22}
            height={202.03}
            className="pointer-events-none"
          />
        </div>

        {/* 콘텐츠 영역 */}
        <TomatoTipDetail tipData={fetchedTip} />

        {/* 하단 고정 회색줄 */}
        <div className="relative mx-auto mb-16 mt-8 h-[2px] max-w-[319px] bg-sub-gray-100 md:mb-[80px] md:mt-[104px] md:max-w-[1264px]"></div>

        {/* 지금 꼭 봐야하는 매거진 */}
        <CurrentHighlights />
      </div>
    </>
  );
};

export default TomatoTipDetailPage;
