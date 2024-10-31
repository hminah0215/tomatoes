import { supabase } from '@/lib/supabaseClient';

export const fetchRecoActivityData = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .gt('d_day', 0) 
    .order('d_day', { ascending: true })
    .limit(8); 

  return { data, error };
};