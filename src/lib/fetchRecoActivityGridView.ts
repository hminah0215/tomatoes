import { supabase } from '@/lib/supabaseClient';

export const fetchRecoActivityData = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .gt('d_day', 0) // d_day가 0보다 큰 항목만
    .order('d_day', { ascending: true }) // d_day 기준 오름차순 정렬
    .limit(8); // 상위 8개만 가져오기

  return { data, error };
};