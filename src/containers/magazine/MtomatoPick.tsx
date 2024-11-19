'use client';

import { useEffect, useState, useRef } from 'react';
import HomeGridItem from '@/containers/home/HomeGridItem';
import Pagination from '@/components/ui/pagination/Pagination';
import HomeGridSkeleton from '@/components/skeleton/HomeGridItemSkeleton';

interface MtomatoPickProps {
  tomatoPicks: ContestActivityDataProps[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

const MtomatoPick = ({ tomatoPicks, pagination }: MtomatoPickProps) => {
  // 제목 위치를 참조할 ref
  const titleRef = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loading, setLoading] = useState(true); // loading 상태 추가

  // 데이터가 로드되었을 때 loading 상태 변경
  useEffect(() => {
    if (tomatoPicks.length > 0) {
      setLoading(false); // 데이터가 있으면 loading 상태를 false로 변경
    }
  }, [tomatoPicks]);

  // 페이지 변경 시 제목 위치로 스크롤 이동
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false); // 첫 로드는 스크롤하지 않음
      return; // 첫 로드 시에는 스크롤을 건너뛰기
    }

    // 첫 로드 이후에는 페이지 이동 시 제목 위치로 스크롤
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pagination.currentPage]);

  return (
    <div>
      <div
        ref={titleRef}
        className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]"
      >
        토마토 Pick
      </div>

      <div className="mb-[72px] mt-[28px] flex flex-col items-center md:mb-[120px] md:mt-[40px] md:items-start">
        {/* 로딩 중일 때 스켈레톤 표시 */}
        {loading ? (
          <div className="grid w-full grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4 md:grid-rows-2">
            {/* 8개의 스켈레톤을 표시 */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full">
                <HomeGridSkeleton />
              </div>
            ))}
          </div>
        ) : (
          // 로딩이 끝나면 실제 데이터 표시
          <Pagination
            items={tomatoPicks}
            GridItem={HomeGridItem}
            columnStyle="web4mobile2"
            gapStyle="gapStyle1"
            pagination={pagination}
          />
        )}
      </div>
    </div>
  );
};

export default MtomatoPick;
