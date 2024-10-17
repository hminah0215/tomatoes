import Image from 'next/image';

interface DdayProps {
  type: 'active' | 'completed' | 'upcoming';
  day?: string;
  color?: 'red' | 'yellow' | 'green';
}

const baseTagStyle = "w-[66px] h-[30px] md:w-[75px] md:h-[33px] p-1 rounded-[999px] justify-center items-center gap-1.5 inline-flex text-sm sm:text-sm md:text-base";
const baseTextStyle = "text-xs md:text-base font-medium leading-[20px]";

const tagStyles = {
  active: {
    red: `${baseTagStyle} bg-point-red-100`,
    yellow: `${baseTagStyle} bg-sub-yellow-100`,
    green: `${baseTagStyle} bg-point-green-100`,
  },
  completed: `${baseTagStyle} bg-sub-gray-100`,
  upcoming: `${baseTagStyle} bg-point-green-100`
};

const textStyles = {
  active: {
    red: `${baseTextStyle} text-point-red-500`,
    yellow: `${baseTextStyle} text-sub-yellow-500`,
    green: `${baseTextStyle} text-point-green-500`,
  },
  completed: `${baseTextStyle} text-sub-gray-400`,
  upcoming: `${baseTextStyle} text-point-green-500`
};

export default function Dday({ type, day, color }: DdayProps) {
  if (type === "active" && color) {
    return (
      <div className={tagStyles.active[color]}>
        <Image
          src={`/assets/common/Plain_${color}_t.svg`} 
          alt="Icon" 
          className={`w-[20px] h-[21px] min-w-[16px] min-h-[17px]`}
        />
        <p className={textStyles.active[color]}>
          D-{day}
        </p>
      </div>
    );
  } else if (type === "completed") {
    return (
      <div className={tagStyles['completed']}>
        <Image 
          src="/assets/common/Plain_gray_t.svg" 
          alt="Icon" 
          className={`w-[20px] h-[21px] min-w-[16px] min-h-[17px]`}
        />
        <p className={textStyles['completed']}>
          마감
        </p>
      </div>
    );
  } else {  // upcoming
    return (
      <div className={tagStyles['upcoming']}>
        <Image 
          src="/assets/common/Plain_green_t.svg" 
          alt="Icon" 
          className={`w-[20px] h-[21px] min-w-[16px] min-h-[17px]`}
        />
        <p className={textStyles['upcoming']}>
          예정
        </p>
      </div>
    );
  }
}