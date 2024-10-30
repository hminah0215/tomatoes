'use client';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import { formatViewCount } from '@/utils/format';
import Link from 'next/link';

type ContestActivityDataPropsWithViewCount = {
  id: number;
  title: string;
  d_day: number;
  view_count: number;
  main_category: '공모전' | '대외활동';
  thumbnail_url: string;
  company: string;
};

interface ActivityContestItemProps {
  item: ContestActivityDataPropsWithViewCount;
}

export default function ActivityContestItem({
  item,
}: ActivityContestItemProps) {
  const {
    id,
    title,
    company,
    d_day,
    view_count,
    main_category,
    thumbnail_url,
  } = item;

  const detailUrl =
    main_category === '공모전' ? `/contest/${id}` : `/activity/${id}`;

  return (
    <Link href={detailUrl} className="block w-full">
      {/* 모바일 이미지 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] border border-sub-gray-100 sm:hidden">
        <Image
          src={thumbnail_url}
          alt={title}
          fill={true}
          className="object-cover"
        />
      </div>

      {/* 웹 이미지 */}
      <div className="relative hidden aspect-[5/6] w-full overflow-hidden rounded-[20px] border border-sub-gray-100 sm:block">
        <Image
          src={thumbnail_url}
          alt={title}
          fill={true}
          className="object-cover"
        />
      </div>

      {/* 제목, 주최기관, 디데이 및 조회수 */}
      <div className="mt-2 w-full md:mt-4">
        <h2 className="line-clamp-2 min-h-[3em] text-base font-semibold md:min-h-[3.9em] md:text-xl">
          {title}
        </h2>

        <p className="mb-2 line-clamp-1 text-sm font-normal text-sub-gray-400 md:text-xl md:font-medium">
          {company}
        </p>

        <div className="flex items-center gap-1.5">
          <Dday type="active" day={d_day} color="red" />
          <p className="text-xs font-normal text-sub-gray-300 sm:text-sm md:text-base md:font-medium">
            조회 {formatViewCount(view_count)}회
          </p>
        </div>
      </div>
    </Link>
  );
}
