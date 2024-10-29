import { supabase } from '@/lib/supabaseClient';

export const fetchContestCardSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .order('view_count', { ascending: false })  // 조회수가 높은 순서대로
    .limit(12);

  return { data, error };
};