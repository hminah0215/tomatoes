interface DdayProps {
  type: 'active' | 'completed' | 'upcoming';
  day: string;
  color?: 'red' | 'yellow' | 'green';
}

const baseTagStyle = "h-[33px] px-2 py-[3px] rounded-[999px] justify-center items-center gap-1.5 inline-flex";
const baseTextStyle = "text-lg font-medium font-['Pretendard'] leading-[27px]";

const tagStyles = {
  active: {
    red: `${baseTagStyle} bg-[#f9dada]`,
    yellow: `${baseTagStyle} bg-[#fcefda]`,
    green: `${baseTagStyle} bg-[#dbe3dc]`,
  },
  completed: `${baseTagStyle} bg-[#D3D3D3]`,
  upcoming: `${baseTagStyle} bg-[#dbe3dc]`
};

const textStyles = {
  active: {
    red: `${baseTextStyle} text-[#e24444]`,
    yellow: `${baseTextStyle} text-[#f2ad48]`,
    green: `${baseTextStyle} text-[#4a734e]`,
  },
  completed: `${baseTextStyle} text-[#7A7A7A]`,
  upcoming: `${baseTextStyle} text-[#4a734e]`
};

export default function Dday({ type, day, color }: DdayProps) {
  if (type === "active" && color) {
    return (
      <div className={tagStyles.active[color]}>
        <img src={`/assets/common/Plain_${color}_t.svg`} alt="Icon" className="w-6 h-6" />
        <span className={textStyles.active[color]}>
          D-{day}
        </span>
      </div>
    );
  } else if (type === "completed") {
    return (
      <div className={tagStyles['completed']}>
        <img src="/assets/common/Plain_gray_t.svg" alt="Icon" className="w-6 h-6" />
        <span className={textStyles['completed']}>
          마감
        </span>
      </div>
    );
  } else {  // upcoming
    return (
      <div className={tagStyles['upcoming']}>
        <img src="/assets/common/Plain_green_t.svg" alt="Icon" className="w-6 h-6" />
        <span className={textStyles['upcoming']}>
          예정
        </span>
      </div>
    );
  }
}