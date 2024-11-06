'use client';

import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/image';
import Dday from '@/components/common/Dday';
import { fetchActivityCardSlider } from '@/lib/fetchActivityCardSlider';
import Link from 'next/link';

function Card({ item }: ContestActivityListProps) {
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
      <div className="p-3 flex flex-col h-[calc(100%-12rem)] min-h-[130px]">
        <h3 className="mb-4 text-base font-bold flex-grow">{item.title}</h3>
        <div className="flex items-center justify-between mt-auto">
          {item.d_day < 0 
            ? <Dday type="completed" /> 
            : <Dday type="active" day={item.d_day} color={item.d_day <= 7 ? 'red' : item.d_day <= 31 ? 'yellow' : 'green'} />
          }
          <span className="ml-2 text-sm text-gray-600">{`${item.start_date} ~ ${item.end_date}`}</span>
        </div>
      </div>
    </div>
  );
}


function ActivityCardSlider() {
  const [activities, setActivities] = useState<ContestActivityDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchActivityCardSlider();
      if (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error.message);
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
    <section className="my-5 flex flex-col items-center gap-4">
      <div 
        className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {currentItems.map((card) => (
          <Link
            key={card.id}
            href={`/${card.main_category === "activity" ? "activity" : "contest"}/${card.id}`}>
            <Card
              item={card}
            />
          </Link>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-10">
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

export default ActivityCardSlider;