import { supabase } from '@/lib/supabaseClient';

export const fetchActivityCardSlider = async () => {
  const { data, error } = await supabase
    .from('tomato_activities')
    .select('*')
    .gt('d_day', 0)
    .order('id', { ascending: false }) 
    .limit(12);

  if (error) {
    return { data: null, error };
  }
  // Date 형식 변경
  const formattedData = data.map((item) => {
    const formatToKoreanDate = (dateString: string) => {
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

  return { data: formattedData, error: null };
};