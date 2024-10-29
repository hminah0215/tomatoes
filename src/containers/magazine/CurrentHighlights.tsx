'use client';

import { TomatoTipDataType } from '@/types/tomatoTips';
import TomatoTipItem from '@/containers/magazine/TomatoTipItem';
import { useEffect, useState } from 'react';
import { fetchThreeTomatoTips } from '@/lib/fetchTomatoTip';
import GridSlideView from '@/components/ui/grid/GridSlideView';

const CurrentHighlights = () => {
  const [tips, setTips] = useState<TomatoTipDataType[]>([]);

  useEffect(() => {
    const fetchTips = async () => {
      // 필요한 3개의 데이터만 가져오는 함수 불러서 쓰기
      const { data, error } = await fetchThreeTomatoTips();

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
    <div className="ml-[28px] h-full w-full md:mx-[88px]">
      <div className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
        지금 꼭 봐야하는 매거진
      </div>
      <div className="mb-[69px] mt-[28px] flex items-center md:mb-[120px] md:mt-[40px] md:items-start">
        {tips.length > 0 && ( // tips가 비어 있지 않을 때만 GridSlideView 렌더링
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
