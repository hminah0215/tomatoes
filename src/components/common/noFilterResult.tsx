import Image from 'next/image';

export default function NoFilterResult() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex flex-col items-center">
          <Image
            src="/assets/noResult/PC_logo_t.svg"
            alt="Logo"
            width={174}
            height={184}
            className="relative my-10 h-[120px] w-[150px] md:h-[160px] md:w-[200px] lg:h-[189px] lg:w-[225px]"
          />
          <p className="text-center">해당 필터에 대한 검색 결과가 없습니다.</p>
          <p className="text-center">다른 필터를 활용하여 검색해보세요.</p>
        </div>
      </div>
    </div>
  );
}
