import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-7 py-4 shadow lg:px-[88px] lg:py-[22px]">
      <Link href="/" className="mr-8 shrink-0">
        {/* 데스크탑 로고 */}
        <Image
          src="/assets/common/PC_logo_text (1).svg"
          width={160}
          height={30}
          alt="tomatoes desktop logo"
          className="hidden md:block"
        />

        {/* 모바일 로고 */}
        <Image
          src="/assets/common/MO_logo_text.svg"
          width={76}
          height={17}
          alt="tomatoes mobile logo"
          className="block md:hidden"
        />
      </Link>

      <Navigation />
    </header>
  );
}
