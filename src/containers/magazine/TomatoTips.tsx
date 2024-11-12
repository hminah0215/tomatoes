'use client';

import { Suspense, useEffect, useState } from 'react';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { fetchAllTomatoTips } from '@/lib/fetchTomatoTip';
import PaginationOld from '@/components/ui/pagination/PaginationOld';
import TomatoTipItem from './TomatoTipItem';

const TomatoTips = () => {
  const [tips, setTips] = useState<TomatoTipDataType[]>([]);

  useEffect(() => {
    const fetchTips = async () => {
      const { data, error } = await fetchAllTomatoTips();

      if (error) {
        console.error('Error fetching tips:', error);
        return;
      }

      if (data) {
        setTips(data);
      }
    };

    fetchTips();
  }, []);

  return (
    <>
      <div className="mb-[72px] flex flex-col items-center px-7 md:mb-[120px] md:mt-10 md:items-start md:px-[88px]">
        {tips.length > 0 && (
          <>
            <Suspense fallback={<div>로딩 중...</div>}>
              <PaginationOld
                contents={tips}
                GridItem={TomatoTipItem}
                webItemPerPage={15}
                mobileItemPerPage={12}
                columnStyle="web3mobile1"
                gapStyle="gapStyle3"
              />
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};

export default TomatoTips;
