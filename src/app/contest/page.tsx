import { fetchActivityContestAbstractWith } from '@/lib/fetchActivityAbstractWith';
import Contest from '@/containers/contest/Contest';

interface PageProps {
  searchParams: {
    tab?: string;
    filters?: string;
    sort?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  // URL 파라미터에서 필터와 정렬 옵션 추출
  const filters = searchParams.filters?.split(',').filter(Boolean) || [];
  const sort = searchParams.sort || '관련도순';

  // 필터와 정렬 옵션을 API 호출에 전달
  const { data: activitiesContests, error } =
    await fetchActivityContestAbstractWith({
      filters,
      sort,
      mainCategory: '공모전',
    });

  if (error) {
    console.error('Error fetching activities:', error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return <Contest activitiesContests={activitiesContests || []} />;
}
