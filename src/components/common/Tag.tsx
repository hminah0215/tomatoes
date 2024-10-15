interface TagProps {
  type: 'hot' | 'best' | 'new';
}

export default function Tag({ type }: TagProps) {
  if (type === 'hot') {
    return (
      <div className="
        h-[33px] px-2 py-[3px] bg-[#f9dada] rounded-[999px] 
        justify-center items-center gap-1.5 inline-flex
      ">
        <div className="
          text-[#e24444] text-lg font-medium 
          font-['Pretendard'] leading-[27px]
        ">
          HOT
        </div>
      </div>
    );
  } else if (type === 'best') {
    return (
      <div className="
        h-[33px] px-2 py-[3px] bg-[#dbe3dc] rounded-[999px] 
        justify-center items-center gap-1.5 inline-flex
      ">
        <div className="
          text-[#4a734e] text-lg font-medium 
          font-['Pretendard'] leading-[27px]
        ">
          BEST
        </div>
      </div>
    );
  } else {
    return (
      <div className="
        h-[33px] px-2 py-[3px] bg-[#fcefda] rounded-[999px] 
        justify-center items-center gap-1.5 inline-flex
      ">
        <div className="
          text-[#f2ad48] text-lg font-medium 
          font-['Pretendard'] leading-[27px]
        ">
          NEW
        </div>
      </div>
    );
  }
}