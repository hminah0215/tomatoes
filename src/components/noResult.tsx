import { AiOutlineClose } from 'react-icons/ai';

export default function NoResult() {
  let keyword = "토마토들"; // 사용자가 입력한 키워드
  let count = 0;  // 검색 결과 수

  return (
    <div className="relative w-full h-screen flex flex-col items-center">
      <button className="absolute top-12 left-12">
        <AiOutlineClose className="w-11 h-11" />
      </button>
      <div className="absolute mt-28 px-12 flex flex-col items-start justify-start w-full ">
        <img 
          src="/assets/noResult/PC_header_t.svg"
          alt="Header"
          className="h-[60.80px] mb-4"
        />
        <p>
          <span className="text-point-red-500">{`'${keyword}'`}</span> 에 대한 검색 결과 총 {`${count} 건`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/noResult/PC_logo_t.svg"
            alt="Logo"
            className="relative w-[225px] h-[189px] mt-28"
          />
          <p className="text-[30px] font-semibold font-pretendard leading-[60px] mt-4 mb-4">
            검색 결과가 없습니다.<br/>
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