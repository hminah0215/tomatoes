interface DdayProps {
  type: 'active' | 'completed' | 'upcoming';
  day?: string;
  color?: 'red' | 'yellow' | 'green';
}

const baseTagStyle = "h-[33px] px-2 py-[3px] rounded-[999px] justify-center items-center gap-1.5 inline-flex flex-wrap min-w-[85px] max-w-[120px] text-sm sm:text-sm md:text-base";
const baseTextStyle = "font-medium font-pretendard leading-[27px] text-center";

const tagStyles = {
  active: {
    red: `${baseTagStyle} bg-dDayRed`,
    yellow: `${baseTagStyle} bg-dDayYellow`,
    green: `${baseTagStyle} bg-dDayGreen`,
  },
  completed: `${baseTagStyle} bg-dDayGray`,
  upcoming: `${baseTagStyle} bg-dDayGreen`
};

const textStyles = {
  active: {
    red: `${baseTextStyle} text-dDayTextRed`,
    yellow: `${baseTextStyle} text-dDayTextYellow`,
    green: `${baseTextStyle} text-dDayTextGreen`,
  },
  completed: `${baseTextStyle} text-dDayTextGray`,
  upcoming: `${baseTextStyle} text-dDayTextGreen`
};

export default function Dday({ type, day, color }: DdayProps) {
  if (type === "active" && color) {
    return (
      <div className={tagStyles.active[color]}>
        <img 
          src={`/assets/common/Plain_${color}_t.svg`} 
          alt="Icon" 
          className={`min-w-[24px] min-h-[24px]`}
        />
        <span className={textStyles.active[color]}>
          D-{day}
        </span>
      </div>
    );
  } else if (type === "completed") {
    return (
      <div className={tagStyles['completed']}>
        <img 
          src="/assets/common/Plain_gray_t.svg" 
          alt="Icon" 
          className={`min-w-[24px] min-h-[24px]`}
        />
        <span className={textStyles['completed']}>
          마감
        </span>
      </div>
    );
  } else {  // upcoming
    return (
      <div className={tagStyles['upcoming']}>
        <img 
          src="/assets/common/Plain_green_t.svg" 
          alt="Icon" 
          className={`min-w-[24px] min-h-[24px]`}
        />
        <span className={textStyles['upcoming']}>
          예정
        </span>
      </div>
    );
  }
}