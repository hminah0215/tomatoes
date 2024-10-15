interface TagProps {
  type: 'hot' | 'best' | 'new';
  label: string;
}

const baseTagStyle = "h-[33px] px-2 py-[3px] rounded-[999px] justify-center items-center gap-1.5 inline-flex";
const baseTextStyle = "text-lg font-medium font-pretendard leading-[27px]";

const tagStyles = {
  hot: `${baseTagStyle} bg-dDayRed`,
  new: `${baseTagStyle} bg-dDayYellow`,
  best: `${baseTagStyle} bg-dDayGreen`
};

const textStyles = {
  hot: `${baseTextStyle} text-dDayTextRed`,
  new: `${baseTextStyle} text-dDayTextYellow`,
  best: `${baseTextStyle} text-dDayTextGreen`
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