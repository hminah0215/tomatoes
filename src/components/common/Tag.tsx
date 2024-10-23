interface TagProps {
  type: 'hot' | 'best' | 'new';
  label: string;
}

const baseTagStyle = "w-[43px] h-[24px] md:w-[53px] md:h-[33px] px-2 py-[3px] rounded-[999px] justify-center items-center gap-1.5 inline-flex";
const baseTextStyle = "text-xs md:text-base font-medium font-pretendard leading-[20px] md:leading-[27px]";

const tagStyles = {
  hot: `${baseTagStyle} bg-point-red-100`,
  new: `${baseTagStyle} bg-sub-yellow-100`,
  best: `${baseTagStyle} bg-point-green-100`
};

const textStyles = {
  hot: `${baseTextStyle} text-point-red-500`,
  new: `${baseTextStyle} text-sub-yellow-500`,
  best: `${baseTextStyle} text-point-green-500`
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