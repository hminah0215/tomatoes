import { supabase } from '@/lib/supabaseClient';

export const fetchMainSlider = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .gt('d_day', 0); 

  if (error) {
    return { data: null, error };
  }
  // Date 형식 변경
  const formattedData = data.map((item) => {
    const formatToKoreanDate = (dateString: Date) => {
      const date = new Date(dateString);
      
      return date.toLocaleDateString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }).replace(/\./g, '').trim().replace(/ /g, '.');
    };

    return {
      ...item,
      start_date: formatToKoreanDate(item.start_date),
      end_date: formatToKoreanDate(item.end_date),
    };
  });

  const shuffledData = formattedData.sort(() => 0.5 - Math.random()).slice(0, 5);

  return { data: shuffledData, error: null };
};
