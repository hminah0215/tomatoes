// app/magazine/MtomatoPick.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Pagination from '@/components/ui/pagination/Pagination';
import HomeGridItem from '@/containers/home/HomeGridItem';
import { fetchBestPickAll } from '@/lib/fetchBestPickGridView';
import { useSearchParams } from 'next/navigation';

const MtomatoPick = () => {
  const [tomatoPicks, setTomatoPicks] = useState<ContestActivityDataProps[]>(
    []
  );

  // "토마토 Pick" 제목 위치를 참조하기 위한 ref
  const titleRef = useRef<HTMLDivElement>(null);

  // url 쿼리파라미터 가져오기
  // 현재 페이지네이션의 페이지 번호, 쿼리 파라미터 'page'를 참조, 기본값은 '1'
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  // 컴포넌트가 처음 로드될 때를 확인하는 상태, 페이지네이션 변경 시 스크롤 방지에 사용
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  // 페이지 변경 시  "토마토 Pick" 제목 위치로 스크롤 이동 (처음 로드 시에는 제외)
  useEffect(() => {
    if (!isInitialLoad) {
      titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsInitialLoad(false);
    }
  }, [currentPage]);

  return (
    <>
      <div
        ref={titleRef}
        className="font-['Recipekorea'] text-[20px] font-medium text-sub-gray-500 md:text-[32px]"
      >
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
