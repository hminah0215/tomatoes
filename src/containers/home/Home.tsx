import ContestBanner from '@/containers/home/ContestBanner';
import MainSlider from '@/containers/home/MainSlider';
import Image from 'next/image';
import ContestCardSlider from '@/containers/home/ContestCardSlider';
import ActivityCardSlider from '@/containers/home/ActivityCardSlider';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';
import BestPickGridView from './BestPickGridView';
import RecoActivityGridView from './RecoActivityGridView';

export default function Home() {
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
        <section className="mx-8 my-5 flex flex-col">
          <BestPickGridView />
        </section>
      </section>

      {/* 토마토들 추천 활동 */}
      <section className="ml-8 mt-20 flex items-center">
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
      <section className="mx-8 my-5 flex flex-col">
        <RecoActivityGridView />
      </section>

      {/* 공모전 */}
      <section className="mt-20">
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
      <section className="mt-20">
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
      <section className="ml-8 mt-20">
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
        매거진 컴포넌트 넣기
      </section>
    </>
  );
}
