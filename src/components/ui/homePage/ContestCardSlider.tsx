'use client';
import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-3">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold my-2">{title}</h3>
        <div className="flex items-center">
          <Dday type={dDay.type} color={dDay.color} day={dDay.day} />
          <span className="text-gray-600 text-sm ml-2">{period}</span>
        </div>
      </div>
    </div>
  );
}

function CardSlider() {
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
      title: '2024 영광 방문의 해 맞이 숏-폼 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Contest1.png',
      dDay: {
        type: 'active',
        day: '20',
        color: 'red',  
      }
    },
    {
      title: 'EBS 온라인클래스 교육콘텐츠 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Contest2.png',
      dDay: {
        type: 'active',
        day: '10',
        color: 'yellow',
      }
    },
    {
      title: '한국체육산업개발(주) 홍보 웹툰 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Main_Poster2.png',
      dDay: {
        type: 'active',
        day: '5',
        color: 'green',
      }
    },
    {
      title: 'EBS 온라인클래스 교육콘텐츠 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Contest2.png',
      dDay: {
        type: 'active',
        day: '10',
        color: 'yellow',
      }
    },
    {
      title: '한국체육산업개발(주) 홍보 웹툰 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Main_Poster2.png',
      dDay: {
        type: 'active',
        day: '5',
        color: 'green',
      }
    },
    {
      title: '2024 영광 방문의 해 맞이 숏-폼 공모전',
      period: '24.09.02 ~ 24.09.15',
      imageUrl: '/assets/homePage/Contest1.png',
      dDay: {
        type: 'active',
        day: '20',
        color: 'red',  
      }
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      <div className="flex items-center justify-center gap-10 mt-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineLeftCircle className="w-7 h-7" />
        </button>
        <div className="font-medium">
          {`0${currentPage+1} / 0${totalPages}`}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineRightCircle className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}

export default CardSlider;