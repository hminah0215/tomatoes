import ActivityDetail from '@/containers/activity/ActivityDetail';
import { fetchActivityContestDetailWith } from '@/lib/fetchActivityContestDetailWith';
import { supabase } from '@/lib/supabaseClient';

export async function generateStaticParams() {
  const { data: posts, error } = await supabase
    .from('activities_contests')
    .select('id')
    .neq('id', null);

  if (error) {
    console.error('Error fetching IDs:', error);
    return [];
  }

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const id = Number(params.id);
  const mainCategory = '대외활동';

  const { data: activityDetail, error } = await fetchActivityContestDetailWith(
    id,
    mainCategory
  );

  if (error || !activityDetail) {
    return <div>데이터 로딩 중 에러 발생</div>;
  }

  return <ActivityDetail {...activityDetail} />;
}
