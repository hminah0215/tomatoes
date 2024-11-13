'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BannerLink from './BannerLink';
import { fetchMainSlider } from '@/lib/fetchMainSlider';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';

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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const textColor = isDarkColor(contents[currentIndex]?.dominant_color)
    ? "text-white"
    : "text-black";

  return (
    <div
      className="relative h-[429px] w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: contents[currentIndex]?.dominant_color || '#000000' }}
    >
      <div className={`absolute top-10 left-6 z-20 ${textColor}`}>
        <h2 className="text-base font-medium">
          {`[ ${contents[currentIndex]?.main_category} ]`}
        </h2>
        <h1 className="h-20 line-clamp-2 mb-1 text-2xl font-bold leading-10 max-w-[70%]">
          {contents[currentIndex]?.title}
        </h1>
        <BannerLink url={`/contest/${contents[currentIndex]?.id}`} />
      </div>

      <div className="relative mt-6 mb-10 w-full flex justify-center items-start space-x-0">
        {contents.map((content, index) => {
          const position = (index - currentIndex + contents.length) % contents.length;

          let transformStyle = '';
          if (position === 0) transformStyle = 'scale(1.2) translateX(0)'; 
          else if (position === 1) transformStyle = 'scale(0.9) translateX(150%)'; 
          else if (position === contents.length - 1) transformStyle = 'scale(0.9) translateX(-150%)';
          else transformStyle = 'scale(0.7) translateX(300%)';

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out ${position === 0 ? 'z-8' : 'z-0'}`}
              style={{
                transform: transformStyle,
                opacity: position === 0 ? 1 : 0.5,
              }}
            >
              <div 
                className="w-[200px] h-[180px] shadow-2xl rounded-3xl overflow-hidden">
                <Link
                  href={`/contest/${contents[currentIndex]?.id}`}
                >
                  <Image
                    src={content.thumbnail_url}
                    alt={`slide-${index}`}
                    width={200}
                    height={180}
                    objectFit="cover"
                    objectPosition="center"
                    className="opacity-80"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-6 right-3 -translate-x-1/2 transform rounded-full bg-gray-800 px-2 py-1 text-xs text-white opacity-60">
        {`0${currentIndex + 1} / 0${contents.length}`}
      </div>

      <button
        onClick={prevSlide}
        className="absolute z-10 left-8 bottom-[20%] -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineLeft className="h-10 w-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 right-8 bottom-[20%] -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineRight className="h-10 w-7" />
      </button>
    </div>
  );
}
