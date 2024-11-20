'use client';

import Navigation from '../ui/navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';

export default function Header() {
  const handleSearch = (keyword: string) => {
    window.location.href = `/search?query=${encodeURIComponent(keyword)}`;
  };

  const [placeholder, setPlaceholder] = useState('검색어를 입력해주세요');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPlaceholder('검색어 입력');
      } else {
        setPlaceholder('검색어를 입력해주세요');
      }
    };

    // 초기 실행 및 이벤트 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="flex w-full items-center justify-between px-7 py-4 shadow lg:px-[88px] lg:py-[22px]">
      <Link href="/" className="mr-8 shrink-0">
        <Image
          src="/assets/common/PC_logo_text (1).svg"
          width={160}
          height={30}
          alt="tomatoes desktop logo"
          className="hidden md:block"
        />

        <Image
          src="/assets/common/MO_logo_text.svg"
          width={76}
          height={17}
          alt="tomatoes mobile logo"
          className="block md:hidden"
        />
      </Link>

      <Navigation />
      <SearchBar placeholder={placeholder} onSearch={handleSearch} />
    </header>
  );
}
