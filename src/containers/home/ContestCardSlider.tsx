'use client';
import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import GridView from '@/components/ui/grid/GridView';
import HomeGridItem from './HomeGridItem';

async function FetchData(): Promise<ContestActivityDataProps []> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/activities_contests`, {
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
    },
  });

  if (!response.ok) {
    console.error("데이터를 가져오는 중 오류 발생");
    return [];
  }

  const data: ContestActivityDataProps[] = await response.json();
  return data;
}

function ContestCardSlider() {
  const [activities, setActivities] = useState<ContestActivityDataProps []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData();
      setActivities(data);
    };

    fetchData();
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    updateItemsPerPage();

    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const currentItems = activities.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="flex flex-col items-center gap-4 p-4">
      <div className="w-full h-full">
        <GridView
          items={activities}
          GridItem={HomeGridItem}
          columnStyle="web4mobile2"
          gapStyle="gapStyle2"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-10">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === 0
              ? 'cursor-not-allowed opacity-50'
              : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineLeftCircle className="h-7 w-7" />
        </button>
        <div className="font-medium">
          {`0${currentPage + 1} / 0${totalPages}`}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 text-gray-500 ${
            currentPage === totalPages - 1
              ? 'cursor-not-allowed opacity-50'
              : 'hover:text-gray-900'
          }`}
        >
          <AiOutlineRightCircle className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}

export default ContestCardSlider;
