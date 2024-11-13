'use client';

import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type searchKeywordProps = {
  searchKeyword: string;
};

export default function NoResult({ searchKeyword }: searchKeywordProps) {
  const keyword = searchKeyword;
  const router = useRouter();

  return (
    <div className="relative flex h-screen w-full flex-col items-center">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
        className="absolute left-12 top-12 transform transition-transform duration-300 hover:rotate-90"
      >
        <AiOutlineClose className="w-8 h-8 md:w-12 md:h-12" />
      </Link>
      <div className="absolute mt-24 flex w-full flex-col items-start justify-center px-12">
        <div className="flex flex-row gap-3 my-5 items-center justify-center">
          <p className="font-recipe font-medium text-[21px] md:mt-4 md:text-[38px]">무엇을 찾고 계신가요?</p>
          <Image
            src="/assets/noResult/PC_header_tomato.svg"
            alt="Header"
            width={60}
            height={60}
            className="w-10 h-10"
          />
        </div>
        <p className="text-[14px] md:text-[23px]">
          <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한
          검색 결과 총 0건
        </p>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/noResult/PC_logo_t.svg"
            alt="Logo"
            width={174}
            height={184}
            className="relative mt-24 h-[120px] w-[150px] md:mt-28 md:h-[160px] md:w-[200px] lg:h-[189px] lg:w-[225px]"
          />
          <p className="font-pretendard my-5 text-[20px] font-semibold leading-[60px] md:text-[30px]">
            검색 결과가 없습니다.
          </p>
          <p className="text-center text-[14px] md:text-[22px]">
            <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한
            검색 결과가 없습니다.
          </p>
          <p className="text-[14px] md:text-[22px]">다른 검색어 또는 추천 검색어를 활용하여 검색해보세요.</p>
        </div>
      </div>
    </div>
  );
}
