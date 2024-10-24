'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Dday from '../../common/Dday';

// 숫자 포맷팅 함수
const formatViewCount = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

// 접수 기간의 마감 날짜만 추출하는 함수
const extractEndDate = (receptionPeriod: string) => {
  const dates = receptionPeriod.split('~');
  return dates[1]?.trim() || receptionPeriod; // 마감 날짜가 없으면 전체 기간 반환
};

export default function GridItem({ activity }: { activity: Activity }) {
  const {
    imageUrl,
    title,
    organization,
    dDay,
    receptionPeriod,
    category,
    viewCount,
  } = activity;

  // 현재 경로 확인
  const pathname = usePathname();
  const isSpecialRoute = ['/activity', '/contest', '/talk'].includes(pathname);

  return (
    <div className="relative aspect-square max-w-[300px]">
      {/* 이미지 및 카테고리 */}

      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={360}
        objectFit="cover"
        className="rounded-[20px] border border-sub-gray-100"
      />

      {/* 카테고리 */}
      {!isSpecialRoute && (
        <div className="absolute right-2 top-2 rounded-full bg-sub-gray-500 px-2 py-[2px] text-xs font-normal text-white md:right-3 md:top-3 md:px-3 md:py-1 md:text-xl md:font-medium">
          {category}
        </div>
      )}

      <div className="mt-2 md:mt-4">
        {/* 제목 */}
        <h2 className="line-clamp-2 h-12 text-base font-semibold md:h-[78px] md:text-xl md:font-semibold">
          {title}
        </h2>

        {/* 주최 기관 */}
        {isSpecialRoute && (
          <p className="mb-2 text-sm font-normal text-sub-gray-400 md:text-xl md:font-medium">
            {organization}
          </p>
        )}

        {/* D-Day 및 조회수 또는 접수 기간 */}
        <div className="flex items-center gap-1.5">
          <Dday type="active" day={dDay} color="red" />
          <p className="md:text-md text-xs font-normal text-sub-gray-300 sm:text-sm md:font-medium lg:text-base xl:text-base">
            {isSpecialRoute ? (
              `조회 ${formatViewCount(viewCount)}회`
            ) : (
              <>
                <span className="inline sm:hidden">{`~ ${extractEndDate(receptionPeriod)}`}</span>
                <span className="hidden sm:inline">{receptionPeriod}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
