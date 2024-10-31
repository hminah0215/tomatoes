// app/magazine/MtomatoPick.tsx
'use client';

import { useEffect, useState } from 'react';
import Pagination from '@/components/ui/pagination/Pagination';
import HomeGridItem from '@/containers/home/HomeGridItem';
import { fetchBestPickAll } from '@/lib/fetchBestPickGridView';

const MtomatoPick = () => {
  const [tomatoPicks, setTomatoPicks] = useState<ContestActivityDataProps[]>(
    []
  );

  useEffect(() => {
    const fetchPicks = async () => {
      const { data, error } = await fetchBestPickAll();

      if (error) {
        console.error('토마토 Pick 데이터 가져오기 실패:', error);
        return;
      }

      if (data) {
        setTomatoPicks(data);
      }
    };

    fetchPicks();
  }, []);

  return (
    <>
      <div className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]">
        토마토 Pick
      </div>

      <div className="mb-[72px] mt-[28px] flex flex-col items-center md:mb-[120px] md:mt-[40px] md:items-start">
        {tomatoPicks.length > 0 && (
          <Pagination
            contents={tomatoPicks}
            GridItem={HomeGridItem}
            webItemPerPage={8}
            mobileItemPerPage={8}
            columnStyle="web4mobile2"
            gapStyle="gapStyle1"
          />
        )}
      </div>
    </>
  );
};

export default MtomatoPick;
