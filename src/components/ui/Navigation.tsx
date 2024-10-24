'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';

type navItemType = {
  name: string;
  route: string;
  hasNewContent: boolean; // 새로운 콘텐츠 여부
};

export default function Navigation() {
  const pathname = usePathname();

  const navItems: navItemType[] = [
    { name: '매거진', route: '/magazine', hasNewContent: true },
    { name: '공모전', route: '/contest', hasNewContent: false },
    { name: '대외활동', route: '/activity', hasNewContent: false },
  ];

  return (
    <nav className="header-navigation-container z-50">
      <ul className="header-navigation-list">
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return <NavItem key={item.name} {...item} isActive={isActive} />;
        })}
        <li className="hidden md:block">
          <Link
            href="/cs"
            className={`header-link-item ${
              pathname === '/cs' ? 'header-active-link' : 'header-inactive-link'
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
