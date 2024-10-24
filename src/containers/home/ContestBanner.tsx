import Image from 'next/image';
import Link from 'next/link';

export default function ContestBanner() {
  return (
    <Link
      href={`/contest`}
      className="mx-5 my-5 flex justify-center md:my-10 md:mt-10"
    >
      {/* 데스크탑 로고 */}
      <Image
        src={`/assets/homePage/PC_banner.svg`}
        alt="banner"
        width={1138}
        height={153}
        className="hidden rounded-[10px] md:block"
      />

      {/* 모바일 로고 */}
      <Image
        src={`/assets/homePage/MO_banner.svg`}
        alt="banner"
        width={638}
        height={152}
        className="block rounded-[10px] md:hidden"
      />
    </Link>
  );
}
