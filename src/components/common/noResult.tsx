import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

export default function NoResult() {
  const keyword = '토마토들'; // 사용자가 입력한 키워드, 추후 수정 예정

  return (
    <div className="relative flex h-screen w-full flex-col items-center">
      <button className="absolute left-12 top-12">
        <AiOutlineClose className="h-11 w-11" />
      </button>
      <div className="absolute mt-28 flex w-full flex-col items-start justify-start px-12">
        <Image
          src="/assets/noResult/PC_header_t.svg"
          alt="Header"
          width={198}
          height={24}
          className="mb-4 h-[50px] md:h-[50px] md:w-[350px] lg:h-[55px]"
        />
        <p>
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
            className="relative mt-28 h-[120px] w-[150px] md:h-[160px] md:w-[200px] lg:h-[189px] lg:w-[225px]"
          />
          <p className="font-pretendard mb-4 mt-4 text-[22px] font-semibold leading-[60px] md:text-[25px] lg:text-[30px]">
            검색 결과가 없습니다.
          </p>
          <p className="text-center">
            <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한
            검색 결과가 없습니다.
          </p>
          <p>다른 검색어 또는 추천 검색어를 활용하여 검색해보세요.</p>
        </div>
      </div>
    </div>
  );
}
