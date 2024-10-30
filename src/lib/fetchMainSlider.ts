import { supabase } from '@/lib/supabaseClient';

export const fetchMainSlider = async () => {
  // 조건에 맞는 데이터 가져오기
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .gt('d_day', 0); // d_day가 0보다 큰 항목만

  if (error) {
    return { data: null, error };
  }

  const shuffledData = data.sort(() => 0.5 - Math.random()).slice(0, 5);

  return { data: shuffledData, error: null };
};
