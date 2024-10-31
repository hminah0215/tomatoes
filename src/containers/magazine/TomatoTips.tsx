'use client';

import { useEffect, useState } from 'react';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { fetchAllTomatoTips } from '@/lib/fetchTomatoTip';
import Pagination from '@/components/ui/pagination/Pagination';
import TomatoTipItem from './TomatoTipItem';

const TomatoTips = () => {
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
    };

    fetchTips();
  }, []);

  return (
    <>
      <div className="mb-[72px] px-[28px] flex flex-col items-center md:mb-[120px] md:mt-[40px] md:px-[88px] md:items-start">
        {tips.length > 0 && (
          <>
            <Pagination
              contents={tips}
              GridItem={TomatoTipItem} 
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
