import { supabase } from '@/lib/supabaseClient';

export const fetchContestCardSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .eq('main_category', '공모전')
    .gt('d_day', 0)
    .order('id', { ascending: false })
    .limit(12);

  return { data, error };
};