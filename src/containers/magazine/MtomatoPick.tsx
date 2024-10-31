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
    <section>
      <div className="mt-[28px] mb-[72px] flex flex-col items-center md:mt-[40px] md:mb-[120px] md:items-start">
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
    </section>
  );
};

export default MtomatoPick;
