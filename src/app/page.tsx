import CardSlider from '@/components/ui/homePage/ContestCardSlider';
import ContestBanner from '@/components/ui/homePage/ContestBanner';
import MainSlider from '@/components/ui/homePage/MainSlider';
import PaginationForHome from '@/components/ui/pagination/PaginationForHome';
import Image from 'next/image';

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
        <p className="mt-20 ml-8 text-[28px] md:text-[32px] font-normal font-recipe leading-[48px] text-point-red-500">BEST PICK</p>
        <PaginationForHome contents={dummyActivities} />
      </section>

      {/* 토마토들 추천 활동 */}
      <section className="flex items-center ml-8">
        <p className="text-[28px] md:text-[32px] font-normal font-recipe leading-[48px]">
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
        <p className="ml-8 text-[28px] md:text-[32px] font-normal font-recipe leading-[48px]">공모전</p>
        <CardSlider />
      </section>

      {/* 대외활동 */}
      <section className="mt-10">
        <p className="text-[28px] md:text-[32px] font-normal font-recipe leading-[48px]">대외활동</p>
        <p>대외활동 스와이프</p>
      </section>

      {/* 매거진 */}
      <section className="mt-10">
        <p className="text-[28px] md:text-[32px] font-normal font-recipe leading-[48px]">매거진</p>
        <p>매거진 파트</p>
      </section>
    </>
  );
}
