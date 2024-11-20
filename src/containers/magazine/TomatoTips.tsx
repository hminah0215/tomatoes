'use client';

import { TomatoTipDataType } from '@/types/tomatoTips';
import TomatoTipItem from './TomatoTipItem';
import Pagination from '@/components/ui/pagination/Pagination';
import { useEffect, useState } from 'react';
import TomatoTipSkeleton from '@/components/skeleton/TomatoTipSkeleton';

interface TomatoTipsProps {
  tips: TomatoTipDataType[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

export default function TomatoTips({ tips, pagination }: TomatoTipsProps) {
  const [loading, setLoading] = useState(true);

  // 데이터 로딩 상태를 다루기 위한 상태
  useEffect(() => {
    // 만약 `tips` 데이터가 비어있지 않으면 로딩 상태를 종료
    if (tips.length > 0) {
      setLoading(false);
    }
  }, [tips]);

  const defaultPagination = {
    currentPage: 1,
    totalPages: 1,
    totalCount: tips.length,
  };

  const paginationInfo = pagination || defaultPagination; // pagination이 없으면 기본값 사용

  return (
    <div className="mb-[72px] flex flex-col items-center px-7 md:mb-[120px] md:mt-10 md:items-start md:px-[88px]">
      {/* 로딩 상태일 때 스켈레톤 UI 표시 */}
      {loading ? (
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-4 md:gap-6">
          {/* 12개의 스켈레톤을 표시 */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-full">
              <TomatoTipSkeleton />
            </div>
          ))}
        </div>
      ) : (
        // 로딩이 끝나면 실제 데이터 표시
        <Pagination
          items={tips}
          GridItem={TomatoTipItem}
          columnStyle="web3mobile1"
          gapStyle="gapStyle3"
          pagination={paginationInfo}
        />
      )}
    </div>
  );
}
