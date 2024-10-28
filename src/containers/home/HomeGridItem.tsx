'use client';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import Link from 'next/link';

// 접수 기간의 마감 날짜만 추출하는 함수
const extractEndDate = (receptionPeriod: string) => {
  const dates = receptionPeriod.split('~');
  return dates[1]?.trim() || receptionPeriod; // 마감 날짜가 없으면 전체 기간 반환
};

export default function HomeGridItem({ item }: ActivityContestListProps) {
  const { imageUrl, title, dDay, receptionPeriod, category, detailUrl } = item;

  return (
    <Link href={detailUrl} className="relative block justify-self-start">
      {/* 모바일 이미지 */}
      <div className="block sm:hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={152}
          height={200}
          className="rounded-[20px] border border-sub-gray-100"
        />
      </div>

      {/* 웹 이미지 */}
      <div className="hidden sm:block">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={360}
          className="rounded-[20px] border border-sub-gray-100"
        />
      </div>

      {/* 카테고리 */}
      <div className="absolute right-2 top-2 rounded-full bg-sub-gray-500 px-2 py-[2px] text-xs font-normal text-white md:right-3 md:top-3 md:px-3 md:py-1 md:text-xl md:font-medium">
        {category}
      </div>

      <div className="mt-2 md:mt-4">
        {/* 제목 */}
        <h2 className="line-clamp-2 h-12 text-base font-semibold md:h-[78px] md:text-xl md:font-semibold">
          {title}
        </h2>

        {/* D-Day 및 접수 기간 */}
        <div className="flex items-center gap-1.5">
          <Dday type="active" day={dDay} color="red" />
          <p className="md:text-md text-xs font-normal text-sub-gray-300 sm:text-sm md:font-medium lg:text-base xl:text-base">
            <span className="inline sm:hidden">{`~ ${extractEndDate(receptionPeriod)}`}</span>
            <span className="hidden sm:inline">{receptionPeriod}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
