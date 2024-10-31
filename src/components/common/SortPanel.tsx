import Image from 'next/image';

interface SortPanelProps {
  sortOptions: string[];
  activeSort: string;
  onSortChange: (sortOption: string) => void;
  onReset: () => void;
}

export default function SortPanel({
  sortOptions,
  activeSort,
  onSortChange,
  onReset,
}: SortPanelProps) {
  return (
    <div className="mt-7 flex items-center justify-between">
      <ul className="flex gap-4 md:gap-12">
        {sortOptions.map((option, index) => (
          <li
            key={index}
            className={`relative cursor-pointer text-sm font-medium md:text-xl ${
              activeSort === option
                ? 'font-semibold text-point-red-500'
                : 'text-sub-gray-200'
            } ${
              index !== 0
                ? 'before:absolute before:-left-2 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100 md:before:-left-6'
                : ''
            }`}
            onClick={() => onSortChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      <button
        onClick={onReset}
        className="flex items-center text-sm font-medium text-sub-gray-300 md:text-xl"
      >
        초기화
        <Image
          src="/assets/common/PC_reset.svg"
          alt="reset icon"
          className="ml-2 hidden md:block"
          width={16.93}
          height={17.5}
        />
        <Image
          src="/assets/common/PC_reset.svg"
          alt="reset icon"
          className="ml-2 block md:hidden"
          width={9.67}
          height={10}
        />
      </button>
    </div>
  );
}
