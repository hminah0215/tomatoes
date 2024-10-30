'use client';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import Link from 'next/link';

export default function HomeGridItem({ item }: ContestActivityListProps) {
  const { id, title, d_day, start_date, end_date, main_category, thumbnail_url } = item;
  const en_main_category = main_category === 'contest' ? 'contest' : 'activity';

  return (
    <Link 
      href={`${en_main_category}/${id}`} 
      className="relative block"
    >
      {/* 모바일 이미지 */}
      <div className="block sm:hidden w-full my-4 justify-self-start">
        <div className="absolute right-4 top-4 mt-3 rounded-full bg-sub-gray-500 px-2 py-2 text-xs font-normal text-white md:right-3 md:top-3 md:px-3 md:py-1 md:text-lg md:font-medium">
          {main_category}
        </div>
        <Image
          src={thumbnail_url}
          alt={title}
          width={152}
          height={200}
          className="rounded-[20px] border border-sub-gray-100 h-[200px] w-full object-cover"
        />
      </div>

      {/* 웹 이미지 */}
      <div className="hidden sm:block w-full my-4 justify-self-start">
        <div className="absolute right-4 top-4 mt-4 rounded-full bg-sub-gray-500 px-2 py-2 text-xs font-normal text-white md:right-3 md:top-3 md:px-3 md:py-1 md:text-lg md:font-medium">
          {main_category}
        </div>
        <Image
          src={thumbnail_url}
          alt={title}
          width={300}
          height={360}
          className="rounded-[20px] border border-sub-gray-100 h-[360px] object-cover"
        />
      </div>

      {/* 카테고리 */}
      {/* <div className="absolute right-2 top-2 rounded-full bg-sub-gray-500 px-2 py-[2px] text-xs font-normal text-white md:right-3 md:top-3 md:px-3 md:py-1 md:text-lg md:font-medium">
        {main_category}
      </div> */}

      <div className="mt-2 md:mt-4">
        {/* 제목 */}
        <h2 className="line-clamp-0.5 h-12 mb-2 text-sm font-semibold md:h-[78px] md:text-base md:font-semibold lg:text-lg">
          {title}
        </h2>

        {/* D-Day 및 접수 기간 */}
        <div className="flex items-center gap-1.5">
          <Dday type="active" day={d_day} color={d_day <= 7 ? 'red' : d_day <= 31 ? 'yellow' : 'green'} />
          <p className="md:text-md text-xs font-normal text-sub-gray-300 sm:text-sm md:font-medium md:text-sm lg:text-base xl:text-base">
            <span className="inline sm:hidden">{`~ ${end_date}`}</span>
            <span className="hidden sm:inline">{`${start_date} ~ ${end_date}`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
