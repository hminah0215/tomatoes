import { supabase } from '@/lib/supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

export const fetchBestPickActivities = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select('*')
    .order('view_count', { ascending: false })
    .limit(8);

  if (error) {
    return { data: null, error };
  }
  // Date 형식 변경
  const formattedData = data.map((item) => {
    const formatToKoreanDate = (dateString: Date) => {
      const date = new Date(dateString);

      return date
        .toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\./g, '')
        .trim()
        .replace(/ /g, '.');
    };

    return {
      ...item,
      start_date: formatToKoreanDate(item.start_date),
      end_date: formatToKoreanDate(item.end_date),
    };
  });

  return { data: formattedData, error: null };
};

export const fetchBestPickAll = async (): Promise<{
  data: ContestActivityDataProps[];
  error: PostgrestError | null;
  count: number;
}> => {
  const { data, error, count } = await supabase
    .from('activities_contests')
    .select('*', { count: 'exact' }) // count: 'exact' 옵션 추가
    .order('view_count', { ascending: false });

  if (error) {
    console.error('fetchBestPickAll 데이터 가져오기 실패:', error);
  }

  return { data: data || [], error, count: count || 0 }; // count를 포함하여 반환
};
