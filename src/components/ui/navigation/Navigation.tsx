'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';

type navItemType = {
  name: string;
  route: string;
  hasNewContent: boolean;
};

export default function Navigation() {
  const pathname = usePathname();

  const navItems: navItemType[] = [
    { name: '매거진', route: '/magazine', hasNewContent: true },
    { name: '공모전', route: '/contest', hasNewContent: false },
    { name: '대외활동', route: '/activity', hasNewContent: false },
  ];

  const containerClasses =
    'flex flex-1 items-center fixed md:static bottom-[30px] left-1/2 transform -translate-x-1/2 md:transform-none z-50';

  const listClasses =
    'flex gap-6 lg:gap-10 bg-white h-full px-8 md:px-0 py-4 md:py-0 whitespace-nowrap shadow md:shadow-none border md:border-none border-sub-gray-100 rounded-full md:rounded-none items-center';

  const linkItemClasses =
    'whitespace-nowrap text-base lg:text-xl font-medium lg:font-semibold rounded-full py-2 px-3';

  const activeLinkClasses = 'bg-sub-yellow-500 text-sub-gray-500';

  const inactiveLinkClasses = 'bg-sub-yellow-100 text-sub-gray-400';

  return (
    <nav className={containerClasses}>
      <ul className={listClasses}>
        {navItems.map((item) => {
          const isActive = new RegExp(`^${item.route}`).test(pathname);
          return <NavItem key={item.name} {...item} isActive={isActive} />;
        })}
        <li className="hidden md:block">
          <Link
            href="/cs"
            className={`${linkItemClasses} ${
              /^\/cs/.test(pathname) ? activeLinkClasses : inactiveLinkClasses
            }`}
          >
            공고등록/문의
          </Link>
        </li>
      </ul>
      <Image
        src="/assets/common/MO_nav_t.svg"
        width={36}
        height={38}
        alt=""
        className="absolute bottom-[46px] right-6 z-[-1] block md:hidden"
        aria-disabled="true"
      />
    </nav>
  );
}
