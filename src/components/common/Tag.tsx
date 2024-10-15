interface TagProps {
  type: 'hot' | 'best' | 'new';
  label: string;
}

const tagStyles = {
  hot: "h-[33px] px-2 py-[3px] bg-[#f9dada] rounded-[999px] justify-center items-center gap-1.5 inline-flex",
  best: "h-[33px] px-2 py-[3px] bg-[#dbe3dc] rounded-[999px] justify-center items-center gap-1.5 inline-flex",
  new: "h-[33px] px-2 py-[3px] bg-[#fcefda] rounded-[999px] justify-center items-center gap-1.5 inline-flex"
};

const textStyles = {
  hot: "text-[#e24444] text-lg font-medium font-['Pretendard'] leading-[27px]",
  best: "text-[#4a734e] text-lg font-medium font-['Pretendard'] leading-[27px]",
  new: "text-[#f2ad48] text-lg font-medium font-['Pretendard'] leading-[27px]"
};

export default function Tag({ type, label }: TagProps) {
  return (
    <div className={tagStyles[type]}>
      <div className={textStyles[type]}>
        {label}
      </div>
    </div>
  );
}