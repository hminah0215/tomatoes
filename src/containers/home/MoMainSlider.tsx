'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BannerLink from './BannerLink';
import { fetchMainSlider } from '@/lib/fetchMainSlider';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// 색상이 어두운지 확인하는 함수
function isDarkColor(color: string) {
  if (!color) return false;

  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return brightness < 128;
}

export default function MoMainSlider() {
  const [contents, setContents] = useState<MainSliderDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchMainSlider();
      if (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error.message);
      } else {
        setContents(data || []);
      }
    };

    fetchData();
  }, []);

  // 페이지 슬라이더
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (contents.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }
  }, [contents]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  // 텍스트 색상 설정
  const textColor = isDarkColor(contents[currentIndex]?.dominant_color)
    ? "text-white"
    : "text-black";

  return (
    <div
      className="relative h-[429px] w-full overflow-hidden"
      style={{ backgroundColor: contents[currentIndex]?.dominant_color || '#000000' }}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contents.map((content, index) => (
          <div
            key={index}
            className="relative flex min-w-full flex-col justify-center items-start"
          >
            <div className={`z-10 pl-[21px] pt-[42px] items-start text-left ${textColor}`}>
              <h1 className="mb-4 text-3xl font-bold max-w-[60%] leading-10">
                {content.title}
              </h1>
              <BannerLink url={'/contest'} />
            </div>
            <div className="relative mt-4 mb-4 flex w-full justify-center">
              <div className="flex justify-center w-[200px] h-[180px] shadow-2xl rounded-3xl overflow-hidden">
                <Image
                  src={content.thumbnail_url}
                  alt={`slide-${index}`}
                  width={200}
                  height={180}
                  objectFit="cover"
                  objectPosition="center"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>        
        ))}
      </div>
      <div className="absolute top-6 right-3 -translate-x-1/2 transform rounded-full bg-gray-800 px-2 py-1 text-xs text-white opacity-60">
        {`0${currentIndex + 1} / 0${contents.length}`}
      </div>

      {/* 좌우 이동 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineLeft className="h-4 w-4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineRight className="h-4 w-4" />
      </button>
    </div>
  );
}
