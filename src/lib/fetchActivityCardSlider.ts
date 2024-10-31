import { supabase } from '@/lib/supabaseClient';

export const fetchActivityCardSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .eq('main_category', '대외활동')
    .gt('d_day', 0)
    .order('id', { ascending: false }) 
    .limit(12);

  return { data, error };
};