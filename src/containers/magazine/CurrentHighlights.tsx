'use client';

import { TomatoTipDataType } from '@/types/tomatoTips';
import TomatoTipItem from '@/containers/magazine/TomatoTipItem';
import { useEffect, useState } from 'react';
import { fetchThreeTomatoTips } from '@/lib/fetchTomatoTip';
import GridSlideView from '@/components/ui/grid/GridSlideView';
import TomatoTipSkeleton from '@/components/skeleton/TomatoTipSkeleton';

const CurrentHighlights = () => {
  const [tips, setTips] = useState<TomatoTipDataType[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    const fetchTips = async () => {
      const { data, error } = await fetchThreeTomatoTips();

      if (error) {
        console.error('Error fetching tips:', error);
        return;
      }

      if (data) {
        setTips(data);
        setLoading(false); // 데이터 로딩 후 로딩 상태 종료
      }
    };

    fetchTips();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mb-[69px] mt-[28px] flex w-full items-center gap-4 md:mb-[120px] md:mt-[40px] md:items-start">
        {loading ? (
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            <div className="w-full">
              <TomatoTipSkeleton />
            </div>
            {/* 추가 스켈레톤은 모바일에서는 숨기고 md 이상에서만 표시 */}
            <div className="hidden w-full md:block">
              <TomatoTipSkeleton />
            </div>
            <div className="hidden w-full md:block">
              <TomatoTipSkeleton />
            </div>
          </div>
        ) : (
          <GridSlideView<TomatoTipDataType>
            items={tips}
            GridItem={TomatoTipItem}
            slideColumnStyle="web3mobile3"
            slideGapStyle="slideGapStyle1"
          />
        )}
      </div>
    </div>
  );
};

export default CurrentHighlights;
