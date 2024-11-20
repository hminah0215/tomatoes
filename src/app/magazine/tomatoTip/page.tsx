import NotFound from '@/app/not-found';
import TomatoTips from '@/containers/magazine/TomatoTips';
import { fetchPaginatedTomatoTips } from '@/lib/fetchPaginatedData';

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 12;

  // TomatoTips 데이터를 fetch
  const {
    data,
    totalCount,
    totalPages,
    currentPage: page,
    error,
  } = await fetchPaginatedTomatoTips({
    page: currentPage,
    itemsPerPage,
  });

  // 데이터 가져오기 실패 시 처리
  if (error) {
    console.error('Error fetching tomato tips:', error);
    return <div>토마토 Tip 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  // 데이터가 없으면 404 처리
  if (!data || data.length === 0) {
    NotFound();
  }

  const tips = data || [];

  return (
    <>
      <div className="relative mb-[28px] ml-[28px] md:my-0 md:ml-0 md:px-[88px]">
        <div className="font-['Recipekorea'] text-[20px] font-medium leading-[30px] text-sub-gray-500 md:text-[32px] md:leading-[48px]">
          토마토 Tip
        </div>
      </div>
      <TomatoTips
        tips={tips}
        pagination={{
          currentPage: page,
          totalPages,
          totalCount,
        }}
      />
    </>
  );
}
