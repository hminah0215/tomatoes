'use client';

import { TomatoTipDataType } from '@/types/tomatoTips';
import TomatoTipItem from './TomatoTipItem';
import Pagination from '@/components/ui/pagination/Pagination';

interface TomatoTipsProps {
  tips: TomatoTipDataType[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

export default function TomatoTips({ tips, pagination }: TomatoTipsProps) {
  const defaultPagination = {
    currentPage: 1,
    totalPages: 1,
    totalCount: tips.length,
  };

  const paginationInfo = pagination || defaultPagination; // pagination이 없으면 기본값 사용

  return (
    <div className="mb-[72px] flex flex-col items-center px-7 md:mb-[120px] md:mt-10 md:items-start md:px-[88px]">
      <Pagination
        items={tips}
        GridItem={TomatoTipItem}
        columnStyle="web3mobile1"
        gapStyle="gapStyle3"
        pagination={paginationInfo}
      />
    </div>
  );
}
