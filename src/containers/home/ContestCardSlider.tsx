'use client';

import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import { fetchContestCardSlider } from '@/lib/fetchContestCardSlider';
import Link from 'next/link';

function Card({ item }: ContestActivityListProps) {
  const today_date = new Date(); // 오늘 날짜
  const [yearE, monthE, dayE] = item.end_date.split('.').map((part) => parseInt(part, 10));
  const formattedEndDate = new Date(`20${yearE}-${monthE}-${dayE}`); // 마감 날짜
  const [yearS, monthS, dayS] = item.start_date.split('.').map((part) => parseInt(part, 10));
  const formattedStartDate = new Date(`20${yearS}-${monthS}-${dayS}`); // 시작 날짜

  return (
    <div id={`${item.id}`} className="overflow-hidden bg-white">
      <div className="relative h-48 w-full shadow-md">
        <Image
          src={item.thumbnail_url}
          alt={item.title}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex h-[calc(100%-12rem)] min-h-[100px] flex-col p-1">
        <h3 className="mb-3 line-clamp-2 h-11 flex-grow pt-1 text-base font-bold">
          {item.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          {formattedStartDate > today_date ? (
            <Dday type="upcoming" />
          ) : formattedEndDate < today_date ? (
            <Dday type="completed" />
          ) : (
            <Dday
              type="active"
              day={item.d_day}
              color={
                item.d_day <= 7 ? 'red' : item.d_day <= 31 ? 'yellow' : 'green'
              }
            />
          )}
          <p className="text-xs font-normal text-sub-gray-300 sm:text-sm md:text-sm md:font-medium lg:text-sm xl:text-base">
            <span className="inline xl:hidden">{`~ ${item.end_date}`}</span>
            <span className="hidden xl:inline">{`${item.start_date} ~ ${item.end_date}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContestCardSlider() {
  const [activities, setActivities] = useState<ContestActivityDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchContestCardSlider();
      if (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error.message);
      } else {
        setActivities(data || []);
      }
    };

    fetchData();
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    updateItemsPerPage();

    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const currentItems = activities.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="my-5 flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItems.map((card) => (
          <Link key={card.id} href={`/contest/${card.id}`}>
            <Card item={card} />
          </Link>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-10">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === 0
              ? 'cursor-not-allowed opacity-50'
              : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineLeftCircle className="h-7 w-7" />
        </button>
        <div className="font-medium">
          {`0${currentPage + 1} / 0${totalPages}`}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === totalPages - 1
              ? 'cursor-not-allowed opacity-50'
              : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineRightCircle className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}

export default ContestCardSlider;
