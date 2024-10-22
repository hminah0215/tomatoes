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
  const tipsPerPage = 15; // 페이지당 아이템 수 (3개 * 5줄)

  const thumbnailImages = [
    '/assets/magazine/PC_tips_thumbnail_1.svg',
    '/assets/magazine/PC_tips_thumbnail_2.svg',
    '/assets/magazine/PC_tips_thumbnail_3.svg',
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

  // 현재 페이지에 해당하는 팁 아이템만 필터링
  const startIndex = (currentPage - 1) * tipsPerPage;
  const currentTips = tips.slice(startIndex, startIndex + tipsPerPage);

  const totalPages = Math.ceil(tips.length / tipsPerPage);

  return (
    <>
      <div className="flex flex-wrap justify-start items-start gap-6 mx-auto my-[50px] max-w-[1266px]">
        {currentTips.map((tip, index) => (
          <div
            className="flex-col justify-start items-start gap-4 inline-flex w-[401px]"
            key={index}
          >
            <div className="w-full h-[290px] relative bg-main-beige rounded-[20px]">
              <Image
                className="absolute"
                src={tip.image}
                alt={tip.title}
                width={401}
                height={290}
              />
            </div>
            <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <Tag type="hot" label="HOT" />
                <div className="w-[329px] h-[36px] text-sub-gray-500 text-2xl font-semibold leading-9 overflow-hidden whitespace-nowrap text-ellipsis">
                  {tip.title}
                </div>
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="w-[69px] h-[30px] text-sub-gray-300 text-xl font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                  {tip.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지 네이션 컴포넌트 추가 */}
      <div className="mb-[120px] w-[439px] h-[32px]  mx-auto">
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
