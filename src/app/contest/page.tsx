import { fetchPaginatedData } from '@/lib/fetchPaginatedData';
import Contest from '@/containers/contest/Contest';
import { notFound } from 'next/navigation';
import NetworkError from '@/components/common/NetworkError';

interface PageProps {
  searchParams: {
    page?: string;
    filters?: string;
    sort?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
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
    category: 'contest',
    filters,
    sort,
  });

  if (error) {
    console.error('Error fetching activities:', error);
    return <NetworkError />;
  }

  if (!data || data.length === 0) {
    notFound();
  }

  return (
    <Contest
      contests={data}
      pagination={{
        currentPage: page,
        totalPages,
        totalCount,
      }}
    />
  );
}
