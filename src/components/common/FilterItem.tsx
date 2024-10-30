import Image from 'next/image';

interface FilterItemProps {
  filterType: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function FilterItem({
  filterType,
  isSelected,
  onClick,
}: FilterItemProps) {
  return (
    <li
      onClick={onClick}
      className={`relative cursor-pointer list-none rounded-full border border-solid px-4 py-2 text-base md:text-xl ${
        isSelected
          ? 'border-transparent bg-point-red-500 font-semibold text-main-white' // 투명한 border 유지
          : 'border-sub-gray-300 font-medium text-sub-gray-300'
      }`}
    >
      {isSelected && (
        <Image
          src="/assets/common/tag_active.svg"
          width={20.19}
          height={12.29}
          alt=""
          aria-disabled="true"
          className="absolute -top-2 left-1/2 mt-1 -translate-x-1/2 transform"
        />
      )}
      {filterType}
    </li>
  );
} 
