import Image from 'next/image';
import CurrentHighlights from '@/containers/magazine/CurrentHighlights';
import MtomatoPick from '@/containers/magazine/MtomatoPick';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { fetchPaginatedBestPicks } from '@/lib/fetchPaginatedData';
import NotFound from '@/app/not-found';

const MagazinePage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const currentPage = Number(searchParams.page) || 1; // 쿼리 파라미터로 페이지 번호 받기
  const itemsPerPage = 8; // 페이지당 항목 수

  // 데이터 패칭: MtomatoPick 데이터를 가져옴
  const {
    data,
    totalCount,
    totalPages,
    currentPage: page,
    error,
  } = await fetchPaginatedBestPicks({
    page: currentPage,
    itemsPerPage,
  });

  // 데이터 가져오기 실패 시 처리
  if (error) {
    console.error('토마토 Pick 데이터 가져오기 실패:', error);
    return <div>토마토 Pick 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  // 데이터가 없으면 404 처리
  if (!data || data.length === 0) {
    NotFound();
  }

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
          <div className="flex flex-row justify-between">
            <p className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
              지금 꼭 봐야하는 매거진
            </p>
            <Link
              href={'/magazine/tomatoTip'}
              className="flex flex-row items-center gap-1"
            >
              더보기
              <AiOutlineRight />
            </Link>
          </div>
          <CurrentHighlights />

          {/* MtomatoPick에 데이터와 페이지네이션 정보 전달 */}
          <MtomatoPick
            tomatoPicks={data}
            pagination={{
              currentPage: page,
              totalPages,
              totalCount,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MagazinePage;
