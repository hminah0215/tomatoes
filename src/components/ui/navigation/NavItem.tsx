import Link from 'next/link';

export default function NavItem({
  name,
  route,
  isActive,
}: navItemType & { isActive: boolean }) {
  const baseClasses =
    'relative text-sm md:text-base lg:text-2xl font-medium lg:font-semibold box-border border-b-0 md:border-b-2';

  const activeClasses = 'text-sub-gray-500 border-point-green-500';

  const inactiveClasses = 'text-sub-gray-200 border-transparent';

  const finalClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <li className={finalClasses}>
      <Link href={route}>
        {name}
        {isActive && (
          <span className="absolute -right-2 top-1 inline-block h-[5px] w-[5px] rounded-full bg-point-red-500"></span>
        )}
      </Link>
    </li>
  );
}
