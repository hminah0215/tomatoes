import { fetchPaginatedData } from '@/lib/fetchPaginatedData';
import Activity from '@/containers/activity/Activity';
import { notFound } from 'next/navigation';

interface PageProps {
  searchParams: {
    page?: string;
    filters?: string;
    sort?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  // URL 파라미터 파싱
  const currentPage = Number(searchParams.page) || 1;
  const filters = searchParams.filters?.split(',').filter(Boolean) || [];
  const itemsPerPage = 16;
  const sort = (searchParams.sort || '관련도순') as
    | '관련도순'
    | '최신순'
    | '조회순'
    | '마감순';

  const {
    data,
    totalCount,
    totalPages,
    currentPage: page,
    error,
  } = await fetchPaginatedData({
    page: currentPage,
    itemsPerPage,
    category: 'activity',
    filters,
    sort,
  });

  if (error) {
    console.error('Error fetching activities:', error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (!data || data.length === 0) {
    notFound();
  }

  return (
    <Activity
      activities={data}
      pagination={{
        currentPage: page,
        totalPages,
        totalCount,
      }}
    />
  );
}
