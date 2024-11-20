'use client';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import Link from 'next/link';

export default function HomeGridItem({ item }: ContestActivityListProps) {
  const {
    category_id,
    title,
    d_day,
    start_date,
    end_date,
    main_category,
    thumbnail_url,
  } = item;

  const en_main_category = main_category === '공모전' ? 'contest' : 'activity';

  const today_date = new Date();  // 오늘 날짜
  const [yearE, monthE, dayE] = end_date.split('.').map((part) => parseInt(part, 10));
  const formattedEndDate = new Date(`20${yearE}-${monthE}-${dayE}`); // 마감 날짜
  const [yearS, monthS, dayS] = start_date.split('.').map((part) => parseInt(part, 10));
  const formattedStartDate = new Date(`20${yearS}-${monthS}-${dayS}`); // 시작 날짜

  return (
    <Link 
      href={`${en_main_category}/${category_id}`} 
      className="relative block"
    >
      <div className="block sm:hidden w-full justify-center">
        <div className="absolute mt-4 ml-[5%] rounded-full bg-sub-gray-500 p-2 text-xs font-normal text-white md:text-lg md:font-medium">
          {main_category}
        </div>
        <Image
          src={thumbnail_url}
          alt={title}
          width={152}
          height={200}
          className="h-[200px] w-full rounded-[20px] border border-sub-gray-100 object-cover"
        />
      </div>

      <div className="hidden sm:block w-full justify-center">
        <div className="absolute mt-5 ml-5 rounded-full bg-sub-gray-500 p-2 text-xs font-normal text-white md:text-base md:font-medium">
          {main_category}
        </div>
        <Image
          src={thumbnail_url}
          alt={title}
          width={300}
          height={360}
          className="rounded-[20px] border border-sub-gray-100 h-[360px] w-full object-cover"
        />
      </div>

      <div className="mt-2 md:mt-4">
        <h2 className="h-10 mb-4 overflow-hidden text-sm font-semibold line-clamp-2 md:h-[50px] md:text-base md:font-semibold lg:text-lg">
          {title}
        </h2>

        <div className="flex items-center justify-between gap-1.5">
          {formattedStartDate > today_date
          ? <Dday type="upcoming" />
          : formattedEndDate < today_date
            ? <Dday type="completed" />
            : <Dday type="active" day={d_day} color={d_day <= 7 ? 'red' : d_day <= 31 ? 'yellow' : 'green'} />
          }
          <p className="text-xs font-normal text-sub-gray-300 sm:text-sm md:font-medium md:text-sm lg:text-sm xl:text-base">
            <span className="inline xl:hidden">{`~ ${end_date}`}</span>
            <span className="hidden xl:inline">{`${start_date} ~ ${end_date}`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
