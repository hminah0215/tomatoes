'use client';

import { useEffect, useState } from 'react';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { fetchAllTomatoTips } from '@/lib/fetchTomatoTip';
import Pagination from '@/components/ui/pagination/Pagination';
import TomatoTipItem from './TomatoTipItem';

// Props 인터페이스 정의
interface TomatoTipsProps {
  pageSize?: number; // 페이지당 아이템 수
  showPagination?: boolean; // 페이지네이션 표시 여부
}

const TomatoTips = ({ showPagination = true }: TomatoTipsProps) => {
  const [tips, setTips] = useState<TomatoTipDataType[]>([]);

  useEffect(() => {
    const fetchTips = async () => {
      const { data, error } = await fetchAllTomatoTips(); // 모든 데이터 가져오기

      if (error) {
        console.error('Error fetching tips:', error);
        return;
      }

      // console.log('Fetched Tips:', data); // 데이터 로그

      if (data) {
        setTips(data);
      }

      // if (data) {
      //   const processedTips = data.map((tip) => ({
      //     ...tip,
      //   }));

      //   setTips(processedTips);
      //   console.log('Updated Tips:', processedTips);
      // }
    };

    fetchTips();
  }, []);

  return (
    <>
      <div className="relative mx-auto justify-center md:mb-[120px] md:mt-[40px] md:justify-start">
        {/* 페이지네이션 */}
        {showPagination && tips.length > 0 && (
          <>
            {/* {console.log('Tips Contents:', tips)} Tips 로그 */}
            <Pagination
              contents={tips}
              GridItem={TomatoTipItem} // TomatoTipItem을 그리드 아이템으로 전달
              webItemPerPage={15}
              mobileItemPerPage={12}
              columnStyle="web3mobile1"
              gapStyle="gapStyle3"
            />
          </>
        )}
      </div>
    </>
  );
};

export default TomatoTips;
