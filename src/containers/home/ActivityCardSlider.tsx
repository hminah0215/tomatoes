'use client';
import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/image';
import Dday from '@/components/common/Dday';

interface DdayProps {
  type: 'active' | 'completed' | 'upcoming';
  day?: string;
  color?: 'red' | 'yellow' | 'green';
}

interface CardProps {
  title: string;
  period: string;
  imageUrl: string;
  dDay: DdayProps;
}

function Card({ title, period, imageUrl, dDay }: CardProps) {
  return (
    <div className="m-3 overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="my-2 text-base font-bold">{title}</h3>
        <div className="flex items-center">
          <Dday type={dDay.type} color={dDay.color} day={dDay.day} />
          <span className="ml-2 text-sm text-gray-600">{period}</span>
        </div>
      </div>
    </div>
  );
}

function ActivityCardSlider() {
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

  const cards: CardProps[] = [
    {
      title: '경북 K-스토리 페스티벌: K-스토리, 경북을 담다.',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_1.png',
      dDay: {
        type: 'upcoming',
      },
    },
    {
      title: 'CLEAN HEART: 대학생 서포터즈 모집',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_2.png',
      dDay: {
        type: 'active',
        day: '5',
        color: 'red',
      },
    },
    {
      title: '굿네이버스 경남사업본부와 ‘우리함께지구하자’',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_3.png',
      dDay: {
        type: 'completed',
      },
    },
    {
      title: 'CLEAN HEART: 대학생 서포터즈 모집',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_2.png',
      dDay: {
        type: 'active',
        day: '10',
        color: 'yellow',
      },
    },
    {
      title: '굿네이버스 경남사업본부와 ‘우리함께지구하자’',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_3.png',
      dDay: {
        type: 'active',
        day: '5',
        color: 'green',
      },
    },
    {
      title: '경북 K-스토리 페스티벌: K-스토리, 경북을 담다.',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Activity_1.png',
      dDay: {
        type: 'active',
        day: '20',
        color: 'red',
      },
    },
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const currentItems = cards.slice(
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
    <section className="flex flex-col items-center gap-4 p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItems.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            period={card.period}
            imageUrl={card.imageUrl}
            dDay={card.dDay}
          />
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