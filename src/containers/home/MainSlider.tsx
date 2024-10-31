'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import BannerLink from './BannerLink';
import { fetchMainSlider } from '@/lib/fetchMainSlider';

function isDarkColor(color: string) {
  if (!color) return false;

  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return brightness < 128;
}

export default function MainSlider() {
  const [contents, setContents] = useState<MainSliderDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchMainSlider();
      if (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error.message);
      } else {
        setContents(data || []);
      }
    };

    fetchData();
  }, []);

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

  const textColor = isDarkColor(contents[currentIndex]?.dominant_color)
    ? 'text-white'
    : 'text-black';

  return (
    <div
      className="relative h-[527px] w-full overflow-hidden"
      style={{
        backgroundColor: contents[currentIndex]?.dominant_color || '#000000',
      }}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {contents.map((content, index) => (
          <div
            key={index}
            className="relative flex min-w-full items-center justify-center overflow-hidden"
          >
            <div className={`z-10 ml-20 pl-10 ${textColor}`}>
              <h1 className="mb-4 max-w-[80%] break-words text-lg font-bold md:text-3xl">
                {content.title}
              </h1>
              <div className="mb-6">
                <p className="text-base md:text-lg">
                  기간 | {`${content.start_date} ~ ${content.end_date}`}
                </p>
                <p className="text-base md:text-lg">
                  분야 | {content.main_category}
                </p>
                <p className="text-base md:text-lg">
                  대상 | 일반인, 대학생, 청소년
                </p>
              </div>
              <BannerLink
                url={`/${content.main_category === '대외활동' ? 'activity' : 'contest'}/${content.id}`}
              />
            </div>

            <div className="relative right-0 mr-10 h-full w-[55%] scale-125 md:min-w-[500px]">
              <Image
                src={content.thumbnail_url}
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
        className="absolute left-16 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineLeft className="h-4 w-4" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-16 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white opacity-60"
      >
        <AiOutlineRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-gray-800 px-3 py-1 text-sm text-white opacity-60">
        {`0${currentIndex + 1} / 0${contents.length}`}
      </div>
    </div>
  );
}
