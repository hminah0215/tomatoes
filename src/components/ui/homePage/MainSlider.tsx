'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import BannerLink from '@/components/common/BannerLink';

export default function MainSlider() {
  const dummyActivities: Activity[] = Array.from({ length: 4 }, (_, i) => ({
    imageUrl: '/assets/test_image.png',
    title: `2024 두드림 페스티벌 자원 봉사자 모집`,
    organization: `주최 기관 ${i + 1}`,
    dDay: `${Math.floor(Math.random() * 30)}`, // 0 ~ 29일 랜덤 마감일
    receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
    category: i % 3 === 0 ? '대외활동' : i % 3 === 1 ? '공모전' : '교육・강연',
    viewCount: Math.floor(Math.random() * 5000) + 1000, // 1000 ~ 6000 랜덤 조회수
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  // 3초마다 슬라이드를 자동으로 넘기는 기능
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyActivities.length);
    }, 3000); // 3000ms = 3초

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(intervalId);
  }, []);

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dummyActivities.length - 1 : prevIndex - 1));
  };

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyActivities.length);
  };

  return (
    <div className="relative w-full h-[527px] bg-point-red-500 flex items-center justify-center overflow-hidden">
      {/* 이미지 슬라이드 */}
      <div
        className="w-full h-full flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {dummyActivities.map((activity, index) => (
          <div key={index} className="min-w-full flex items-center justify-center text-white px-6">
            <div className="text-left">
              <h1 className="text-3xl font-bold mb-4">{activity.title}</h1>
              <div className="mb-6">
                <p className="text-lg">기간 | {activity.receptionPeriod}</p>
                <p className="text-lg">분야 | {activity.category}</p>
                <p className="text-lg">대상 | 일반인, 대학생, 청소년</p>
              </div>
              <BannerLink url={'/contest'} />
            </div>
            <div className="ml-8">
              <Image
                src={activity.imageUrl}
                alt={`slide-${index}`}
                width={350}
                height={350}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 왼쪽, 오른쪽 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-16 opacity-60 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <AiOutlineLeft className="w-4 h-4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-16 opacity-60 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <AiOutlineRight className="w-4 h-4" />
      </button>

      {/* 현재 슬라이드 표시 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-1 px-3 rounded-full">
        {`${currentIndex + 1}/${dummyActivities.length}`}
      </div>
    </div>
  );
}