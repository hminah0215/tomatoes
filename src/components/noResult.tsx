import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

export default function NoResult() {
  const keyword = "토마토들"; // 사용자가 입력한 키워드, 추후 수정 예정

  return (
    <div className="relative w-full h-screen flex flex-col items-center">
      <button className="absolute top-12 left-12">
        <AiOutlineClose className="w-11 h-11" />
      </button>
      <div className="absolute mt-28 px-12 flex flex-col items-start justify-start w-full">
        <Image 
          src="/assets/noResult/PC_header_t.svg"
          alt="Header"
          className="h-[50px] mb-4 md:h-[50px] lg:h-[55px]"
        />
        <p>
          <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한 검색 결과 총 0건
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/noResult/PC_logo_t.svg"
            alt="Logo"
            className="relative mt-28 w-[150px] h-[120px] md:w-[200px] md:h-[160px] lg:w-[225px] lg:h-[189px]"
          />
          <p className="text-[22px] font-semibold font-pretendard leading-[60px] mt-4 mb-4 md:text-[25px] lg:text-[30px]">
            검색 결과가 없습니다.
          </p>
          <p className="text-center">
            <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한 검색 결과가 없습니다.
          </p>
          <p>
            다른 검색어 또는 추천 검색어를 활용하여 검색해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}