import Link from 'next/link';

export default function BannerLink({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="flex h-[31px] w-[100px] text-sm font-base flex-row items-center justify-center rounded-[5px] bg-point-green-500 text-center text-main-beige hover:bg-opacity-90 md:h-[42px] md:w-[140px] md:text-base lg:h-[52px] lg:w-40 lg:text-xl"
    >
      자세히보기
    </Link>
  );
}
