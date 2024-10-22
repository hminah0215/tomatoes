'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/common/Tag';
import { supabase } from '@/lib/supabaseClient';
import PaginationControl from '@/components/ui/pagination/PaginationControl';

interface Tip {
  image: string;
  title: string;
  author: string;
}

const TomatoTips = () => {
  const [tips, setTips] = useState<Tip[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [tipsPerPage, setTipsPerPage] = useState(15); // 기본값 15

  const thumbnailImages = [
    '/assets/magazine/PC_tips_thumbnail_1.svg',
    '/assets/magazine/PC_tips_thumbnail_2.svg',
    '/assets/magazine/PC_tips_thumbnail_3.svg',
    '/assets/magazine/MO_tips_thumbnail_1.svg', // 모바일 이미지 경로
    '/assets/magazine/MO_tips_thumbnail_2.svg', // 모바일 이미지 경로
    '/assets/magazine/MO_tips_thumbnail_3.svg', // 모바일 이미지 경로
  ];

  useEffect(() => {
    const fetchTips = async () => {
      const { data } = await supabase
        .from('tomato_tips')
        .select('title, author, created_at')
        .order('created_at', { ascending: false }) // 최신 글이 위로 오도록 정렬
        .order('id', { ascending: true }); // id로 정렬하여 id가 작은 것이 위로 (같은날 작성된거면 id순으로)

      if (data) {
        const tipsWithImages = data.map((tip, index) => ({
          image: thumbnailImages[index % thumbnailImages.length],
          title: tip.title,
          author: tip.author,
        }));
        setTips(tipsWithImages);
      }
    };

    fetchTips();
  }, []);

  // 화면 크기에 따라 tipsPerPage 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTipsPerPage(12); // 모바일
      } else {
        setTipsPerPage(15); // PC
      }
    };

    handleResize(); // 초기값 설정
    window.addEventListener('resize', handleResize); // 리사이즈 이벤트 리스너 추가

    return () => {
      window.removeEventListener('resize', handleResize); // 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  // 현재 페이지에 해당하는 팁 아이템만 필터링
  const startIndex = (currentPage - 1) * tipsPerPage;
  const currentTips = tips.slice(startIndex, startIndex + tipsPerPage);

  const totalPages = Math.ceil(tips.length / tipsPerPage);

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-start items-start gap-0 md:gap-6 mx-auto my-[50px] max-w-[1266px]">
        {currentTips.map((tip, index) => (
          <div
            className="flex-col justify-start items-start gap-4 inline-flex md:w-[401px] w-[319px]"
            key={index}
          >
            <div className="w-full h-[230px] md:h-[290px] relative bg-main-beige rounded-[20px]">
              {/* PC 이미지 */}
              <Image
                className="absolute hidden md:block"
                src={`/assets/magazine/PC_tips_thumbnail_${(index % 3) + 1}.svg`}
                alt={tip.title}
                width={401}
                height={290}
              />
              {/* 모바일 이미지 */}
              <Image
                className="absolute block md:hidden"
                src={`/assets/magazine/MO_tips_thumbnail_${(index % 3) + 1}.svg`}
                alt={tip.title}
                width={319}
                height={230}
              />
            </div>
            <div className="self-stretch h-[40px] md:h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <Tag type="hot" label="HOT" />
                <div className="w-[250px] h-[24px] md:w-[329px] md:h-[36px] text-sub-gray-500 font-semibold leading-5 overflow-hidden whitespace-nowrap text-ellipsis text-[16px] md:text-2xl ">
                  {tip.title}
                </div>
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                {/* 원래는pc에서 w-69px인데 닉네임도 ... 처리하면 너무 지저분해서 임의로 늘림 120px도 넘는 닉네임이 있다면 ... 으로 보여라 나도 모르겠다 */}
                <div className="hidden md:block w-[120px] h-[30px] text-sub-gray-300 text-sm md:text-xl font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                  {tip.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지 네이션 컴포넌트 추가 */}
      <div className="mb-[72px] md:mb-[120px] md:w-[439px] md:h-[32px] mx-auto">
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default TomatoTips;
