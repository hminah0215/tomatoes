interface TabItemProps {
  tab: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabItem({ tab, isActive, onClick }: TabItemProps) {
  const baseClasses =
    'cursor-pointer relative pb-2 px-[2px] text-[26px] leading-normal font-semibold after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:rounded-full after:transition-all after:duration-300';

  const activeClasses = isActive
    ? 'text-sub-gray-500 after:w-full after:bg-sub-gray-500 after:h-[4px]'
    : 'text-sub-gray-200 after:w-0 after:bg-transparent after:h-[4px]';

  return (
    <li onClick={onClick} className={`${baseClasses} ${activeClasses}`}>
      <span>{tab}</span>
    </li>
  );
}
