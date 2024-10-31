import { supabase } from '@/lib/supabaseClient';

export const fetchMainSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .gt('d_day', 0); 

  if (error) {
    return { data: null, error };
  }

  const shuffledData = data.sort(() => 0.5 - Math.random()).slice(0, 5);

  return { data: shuffledData, error: null };
};
