'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/common/Tag';
import PaginationControl from '@/components/ui/pagination/PaginationControl';
import Link from 'next/link';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { fetchAllTomatoTips } from '@/lib/fetchTomatoTip';

interface Tip extends TomatoTipDataType {
  image: string; // 여기서만 쓰이는 이미지 속성 추가
}

// Props 인터페이스 정의
interface TomatoTipsProps {
  pageSize?: number; // 페이지당 아이템 수
  showPagination?: boolean; // 페이지네이션 표시 여부
}

const TomatoTips = ({
  pageSize, // 기본값 15
  showPagination = true,
}: TomatoTipsProps) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tipsPerPage, setTipsPerPage] = useState(15); // 기본값 15

  const thumbnailImages = [
    '/assets/magazine/PC_tips_thumbnail_1.svg',
    '/assets/magazine/PC_tips_thumbnail_2.svg',
    '/assets/magazine/PC_tips_thumbnail_3.svg',
    '/assets/magazine/MO_tips_thumbnail_1.svg',
    '/assets/magazine/MO_tips_thumbnail_2.svg',
    '/assets/magazine/MO_tips_thumbnail_3.svg',
  ];

  useEffect(() => {
    const fetchTips = async () => {
      const { data, error } = await fetchAllTomatoTips(); // 모든 데이터 가져오기

      if (data) {
        const tipsWithImages: Tip[] = data.map((tip, index) => ({
          ...tip, // 기존 속성들을 포함
          image: thumbnailImages[index % thumbnailImages.length], // 이미지 추가
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
  const startIndex = (currentPage - 1) * (pageSize || tipsPerPage);
  const currentTips = tips.slice(
    startIndex,
    startIndex + (pageSize || tipsPerPage)
  ); // pageSize가 없을 경우 tipsPerPage 사용
  const totalPages = Math.ceil(tips.length / (pageSize || tipsPerPage)); // pageSize가 없을 경우 tipsPerPage 사용

  return (
    <>
      <div className="mx-auto my-[50px] flex max-w-[1266px] flex-wrap items-start justify-center gap-4 md:justify-start">
        {currentTips.map((tip, index) => (
          <Link
            href={`/magazine/tomatoTip/${tip.id}`}
            key={index}
            className="inline-flex w-full flex-shrink-0 flex-col items-start justify-start gap-4 md:w-[calc(33.33%-16px)]"
          >
            <div className="relative h-[230px] w-full overflow-hidden rounded-[20px] bg-main-beige md:h-[290px]">
              <Image
                className="absolute hidden object-cover md:block"
                src={`/assets/magazine/PC_tips_thumbnail_${(index % 3) + 1}.svg`}
                alt={tip.title}
                width={401}
                height={290}
              />
              <Image
                className="absolute block object-cover md:hidden"
                src={`/assets/magazine/MO_tips_thumbnail_${(index % 3) + 1}.svg`}
                alt={tip.title}
                width={319}
                height={230}
              />
            </div>
            <div className="flex h-[40px] flex-col items-start justify-start gap-2 self-stretch md:h-[74px]">
              <div className="inline-flex items-center justify-start gap-3 self-stretch">
                <Tag type="hot" label="HOT" />
                <div className="h-[24px] w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-5 text-sub-gray-500 md:h-[36px] md:w-[329px] md:text-2xl">
                  {tip.title}
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-3">
                <div className="hidden h-[30px] w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-sub-gray-300 md:block md:text-xl">
                  {tip.author}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 페이지네이션 */}
      {showPagination && (
        <div className="mx-auto mb-[72px] md:mb-[120px] md:h-[32px] md:w-[439px]">
          <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default TomatoTips;
