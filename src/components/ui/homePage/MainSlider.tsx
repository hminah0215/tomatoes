'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import BannerLink from '@/components/common/BannerLink';

export default function MainSlider() {
  const contents = [
    {
      imageUrl: '/assets/homePage/Poster1.png',
      title: '2024 두드림 페스티벌 자원 봉사자 모집',
      receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
      category: '대외활동',
    },
    {
      imageUrl: '/assets/homePage/Poster2.png',
      title: '한국체육산업개발(주) 인스타툰 홍보웹툰 공모전',
      receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
      category: '공모전',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  return (
    <div className="relative w-full h-[527px] bg-[#eb6265] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contents.map((content, index) => (
          <div key={index} className="relative min-w-full flex items-center justify-center">
            <div className="ml-20 pl-10 z-10 text-white">
              <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
              <div className="mb-6">
                <p className="text-lg">기간 | {content.receptionPeriod}</p>
                <p className="text-lg">분야 | {content.category}</p>
                <p className="text-lg">대상 | 일반인, 대학생, 청소년</p>
              </div>
              <BannerLink url={'/contest'} />
            </div>

            <div className="right-0 w-[55%] h-full mr-10 relative scale-125">
              <Image
                src={content.imageUrl}
                alt={`slide-${index}`}
                layout="fill"
                objectFit="contain"
                className="opacity-60"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute opacity-60 top-1/2 left-16 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <AiOutlineLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute opacity-60 top-1/2 right-16 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <AiOutlineRight className="w-4 h-4" />
      </button>

      <div className="absolute opacity-60 bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-full">
        {`0${currentIndex + 1} / 0${contents.length}`}
      </div>
    </div>
  );
}
