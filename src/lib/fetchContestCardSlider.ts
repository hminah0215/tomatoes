import { supabase } from '@/lib/supabaseClient';

export const fetchContestCardSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .eq('main_category', '공모전')
    .gt('d_day', 0) // d_day가 0보다 큰 항목만
    .order('id', { ascending: false })  // 등록일 최신 순으로
    .limit(12);

  return { data, error };
};
