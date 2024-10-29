import Link from 'next/link';

interface TabItemProps {
  tab: string;
  path: string | null;
  isActive: boolean;
  onClick: () => void;
}

export default function TabMenuItem({
  tab,
  path,
  isActive,
  onClick,
}: TabItemProps) {
  const baseClasses =
    'cursor-pointer relative pb-2 px-[2px] text-[18px] md:text-[26px] leading-normal after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:rounded-full after:transition-all after:duration-300';

  const activeClasses = isActive
    ? 'text-sub-gray-500 after:w-full after:bg-sub-gray-500 after:h-[4px] font-semibold'
    : 'text-sub-gray-200 after:w-0 after:bg-transparent after:h-[4px]';

  return (
    <li className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      {path ? <Link href={path}>{tab}</Link> : <span>{tab}</span>}
    </li>
  );
}
