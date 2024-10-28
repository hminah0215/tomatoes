'use client';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import { formatViewCount } from '@/utils/format';
import Link from 'next/link';

export default function ActivityContestItem({
  item,
}: ActivityContestListProps) {
  const { title, organization, dDay, viewCount, imageUrl, detailUrl } = item;

  return (
    <Link href={detailUrl} className="block justify-self-center">
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

      {/* 제목, 주최기관, 디데이 및 조회수 */}
      <div className="mt-2 md:mt-4">
        <h2 className="line-clamp-2 h-12 text-base font-semibold md:h-[78px] md:text-xl md:font-semibold">
          {title}
        </h2>

        <p className="mb-2 text-sm font-normal text-sub-gray-400 md:text-xl md:font-medium">
          {organization}
        </p>

        <div className="flex items-center gap-1.5">
          <Dday type="active" day={dDay} color="red" />
          <p className="md:text-md text-xs font-normal text-sub-gray-300 sm:text-sm md:font-medium lg:text-base xl:text-base">
            조회 {formatViewCount(viewCount)}회
          </p>
        </div>
      </div>
    </Link>
  );
}
