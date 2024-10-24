import ContestBanner from '@/components/ui/homePage/ContestBanner';
import MainSlider from '@/components/ui/homePage/MainSlider';
import PaginationForHome from '@/components/ui/pagination/PaginationForHome';
import Image from 'next/image';
import ContestCardSlider from '@/components/ui/homePage/ContestCardSlider';
import ActivityCardSlider from '@/components/ui/homePage/ActivityCardSlider';
import TomatoTips from './magazine/components/TomatoTips';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
  const dummyActivities: Activity[] = Array.from({ length: 80 }, (_, i) => ({
    imageUrl: '/assets/test_image.png',
    title: `활동 타이틀 ${i + 1}`,
    organization: `주최 기관 ${i + 1}`,
    dDay: `${Math.floor(Math.random() * 30)}`, // 0 ~ 29일 랜덤 마감일
    receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
    category: i % 3 === 0 ? '대외활동' : i % 3 === 1 ? '공모전' : '교육・강연',
    viewCount: Math.floor(Math.random() * 5000) + 1000, // 1000 ~ 6000 랜덤 조회수
  }));

  return (
    <>
      {/* 메인 공고 컴포넌트 */}
      <MainSlider />
      <ContestBanner />

      {/* BEST PICK */}
      <section>
        <p className="ml-8 mt-20 font-recipe text-[28px] font-normal leading-[48px] text-point-red-500 md:text-[32px]">
          BEST PICK
        </p>
        <PaginationForHome contents={dummyActivities} />
      </section>

      {/* 토마토들 추천 활동 */}
      <section className="ml-8 flex items-center">
        <p className="font-recipe text-[28px] font-normal leading-[48px] md:text-[32px]">
          토마토들 <span className="text-point-red-500">추천 활동</span>
        </p>
        <Image
          src={`/assets/homePage/PC_recommendationMark_t.svg`}
          alt="banner"
          width={80}
          height={82}
          className="ml-2"
        />
      </section>
      <PaginationForHome contents={dummyActivities} />

      {/* 공모전 */}
      <section className="mt-10">
        <div className="flex flex-row justify-between">
          <p className="ml-8 font-recipe text-[28px] font-normal leading-[48px] md:text-[32px]">
            공모전
          </p>
          <Link
            href={'/contest'}
            className="mr-10 flex flex-row items-center gap-1"
          >
            더보기
            <AiOutlineRight />
          </Link>
        </div>
        <ContestCardSlider />
      </section>

      {/* 대외활동 */}
      <section className="mt-10">
        <div className="flex flex-row justify-between">
          <p className="ml-8 font-recipe text-[28px] font-normal leading-[48px] md:text-[32px]">
            대외활동
          </p>
          <Link
            href={'/activity'}
            className="mr-10 flex flex-row items-center gap-1"
          >
            더보기
            <AiOutlineRight />
          </Link>
        </div>
        <ActivityCardSlider />
      </section>

      {/* 매거진 */}
      <section className="ml-8 mt-10">
        <div className="flex flex-row justify-between">
          <p className="font-recipe text-[28px] font-normal leading-[48px] md:text-[32px]">
            매거진
          </p>
          <Link
            href={'/magazine'}
            className="mr-10 flex flex-row items-center gap-1"
          >
            더보기
            <AiOutlineRight />
          </Link>
        </div>
        <TomatoTips pageSize={3} showPagination={false} />
      </section>
    </>
  );
}
