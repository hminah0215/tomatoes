import Link from 'next/link';

type navItemType = {
  name: string;
  route: string;
  hasNewContent: boolean;
};

export default function NavItem({
  name,
  route,
  isActive,
  hasNewContent,
}: navItemType & { isActive: boolean }) {
  return (
    <li
      className={`header-nav-item ${isActive ? 'header-active' : 'header-inactive'}`}
    >
      <Link href={route}>
        {name}
        {hasNewContent && <span className="header-has-new-content"></span>}
      </Link>
    </li>
  );
}
