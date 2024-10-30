import { supabase } from '@/lib/supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

export const fetchBestPickActivities = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .order('view_count', { ascending: false })
    .limit(8);

  return { data, error };
};

// 전체 데이터를 가져오는 함수
export const fetchBestPickAll = async (): Promise<{
  data: ContestActivityDataProps[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .order('view_count', { ascending: false });

  if (error) {
    console.error('fetchBestPickAll 데이터 가져오기 실패:', error);
  }

  return { data, error };
};
