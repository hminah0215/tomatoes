export default function NoResult() {
  let keyword = "토마토들";
  let count = 0;

  return (
    <>
      <button>X</button>
      <div>
        <img 
          src="/assets/noResult/PC_header_t.svg"
          alt="Header"
          className="h-[67.80px] justify-start items-center gap-6 inline-flex"
        />
      </div>
      <p><span className="text-point-red-500">{`'${keyword}'`}</span>에 대한 검색 결과 총 {`${count}건`}</p>
      <div className="font-pretendard">
        <img 
          src="/assets/noResult/PC_logo_t.svg"
          alt="Logo"
          className="w-[225px] h-[189px] relative"
        />
        <span className="text-[30px] font-semibold font-pretendard leading-[60px]">검색 결과가 없습니다.<br/></span>
        <p><span className="text-point-red-500">{`'${keyword}'`}</span>에 대한 검색 결과가 없습니다.</p>
        <p>{`다른 검색어 또는 추천 검색어를 활용하여 검색해보세요.`}</p>
      </div>
    </>
  );
}