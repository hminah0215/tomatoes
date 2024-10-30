import { supabase } from '@/lib/supabaseClient';

export const fetchBestPickActivities = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .order('view_count', { ascending: false })
    .limit(8);

  return { data, error };
};