import ContestBanner from '@/containers/home/ContestBanner';
import MainSlider from '@/containers/home/MainSlider';
import Image from 'next/image';
import ContestCardSlider from '@/containers/home/ContestCardSlider';
import ActivityCardSlider from '@/containers/home/ActivityCardSlider';
import TomatoTips from '../magazine/TomatoTips';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';
import HomeGridItem from './HomeGridItem';
import GridView from '@/components/ui/grid/GridView';

export default function Home() {
  const dummyActivities: ActivityContestDetailsProps[] = Array.from(
    { length: 8 },
    (_, i) => ({
      imageUrl: '/assets/test_image.png',
      title: `활동 타이틀 ${i + 1}`,
      organization: `주최 기관 ${i + 1}`,
      dDay: `${Math.floor(Math.random() * 30)}`, // 0 ~ 29일 랜덤 마감일
      receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
      category: i % 2 === 0 ? '대외활동' : '공모전', // '교육・강연' 제거, 대외활동과 공모전만 사용
      viewCount: `${Math.floor(Math.random() * 5000) + 1000}`, // 1000 ~ 6000 랜덤 조회수 (string으로 변환)
      detailUrl: `/activities/${i + 1}`, // detailUrl 추가
    })
  );

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
        {/* GridView 컴포넌트를 사용해서 변경해주세요 */}
        {/* <PaginationForHome contents={dummyActivities} /> */}
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
      <section className="mx-8 my-5 mb-20 flex flex-col">
        <GridView
          items={dummyActivities}
          GridItem={HomeGridItem}
          columnStyle="web4mobile2"
          gapStyle="gapStyle1"
        />
      </section>

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
