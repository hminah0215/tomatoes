interface TagProps {
  type: 'hot' | 'best' | 'new';
  label: string;
}

const baseTagStyle = "h-[33px] px-2 py-[3px] rounded-[999px] justify-center items-center gap-1.5 inline-flex";
const baseTextStyle = "text-lg font-medium font-['Pretendard'] leading-[27px]";

const tagStyles = {
  hot: `${baseTagStyle} bg-[#f9dada]`,
  best: `${baseTagStyle} bg-[#dbe3dc]`,
  new: `${baseTagStyle} bg-[#fcefda]`
};

const textStyles = {
  hot: `${baseTextStyle} text-[#e24444]`,
  best: `${baseTextStyle} text-[#4a734e]`,
  new: `${baseTextStyle} text-[#f2ad48]`
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