import { supabase } from './supabaseClient';

export const fetchActivityContestAbstracts = async () => {
  const { data, error } = await supabase
    .from('activities_contests')
    .select(
      'id, title, view_count, thumbnail_url, d_day, company, main_category'
    ); // 필요한 필드만 선택

  if (error) console.error('데이터 불러오기 실패', error);

  return { data, error };
};
