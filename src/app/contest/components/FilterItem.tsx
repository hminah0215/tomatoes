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
      className={`cursor-pointer list-none relative rounded-full px-4 py-2 text-xl border border-solid ${
        isSelected
          ? 'bg-point-red-500 text-main-white font-semibold border-transparent' // 투명한 border 유지
          : 'border-sub-gray-300 text-sub-gray-300 font-medium'
      }`}
    >
      {isSelected && (
        <Image
          src="/assets/common/tag_active.svg"
          width={20.19}
          height={12.29}
          alt=""
          aria-disabled="true"
          className="absolute left-1/2 -top-2 transform -translate-x-1/2 mt-1"
        />
      )}
      {filterType}
    </li>
  );
}
