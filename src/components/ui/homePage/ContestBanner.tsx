import Image from "next/image";
import Link from "next/link";

export default function ContestBanner() {
  return (
    <Link 
      href={`/contest`}
      className="flex justify-center mx-5 my-5 md:mt-10 md:my-10 "
    >
      {/* 데스크탑 로고 */}
      <Image 
        src={`/assets/homePage/PC_banner.svg`}
        alt="banner"
        width={1138}
        height={153}
        className="rounded-[10px] hidden md:block"
      />     

      {/* 모바일 로고 */}
      <Image 
        src={`/assets/homePage/MO_banner.svg`}
        alt="banner"
        width={638}
        height={152}
        className="rounded-[10px] block md:hidden"
      />      
    </Link>
  );
}