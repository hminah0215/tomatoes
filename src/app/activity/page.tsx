import { fetchActivityContestAbstractWith } from '@/lib/fetchActivityAbstractWith';
import Activity from '@/containers/activity/Activity';

interface PageProps {
  searchParams: {
    tab?: string;
    filters?: string;
    sort?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const filters = searchParams.filters?.split(',').filter(Boolean) || [];
  const sort = searchParams.sort || '관련도순';

  const { data: activitiesContests, error } =
    await fetchActivityContestAbstractWith({
      filters,
      sort,
      mainCategory: '대외활동',
    });

  if (error) {
    console.error('Error fetching activities:', error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return <Activity activitiesContests={activitiesContests || []} />;
}
