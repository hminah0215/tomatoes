import ActivityDetail from '@/containers/activity/ActivityDetail';
import { fetchActivityContestDetailWith } from '@/lib/fetchActivityContestDetailWith';
import { supabase } from '@/lib/supabaseClient';
import NetworkError from '@/components/common/NetworkError';

export async function generateStaticParams() {
  const { data: posts, error } = await supabase
    .from('tomato_activities')
    .select('id');

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

  const { data: activityDetail, error } = await fetchActivityContestDetailWith(
    id,
    'tomato_activities'
  );

  if (error || !activityDetail) {
    return <NetworkError />;
  }

  return <ActivityDetail {...activityDetail} />;
}
