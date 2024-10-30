import { supabase } from './supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

type ActivityContestDetail = {
  thumbnail_url: string;
  title: string;
  registration_date: string;
  view_count: number;
  start_date: string;
  end_date: string;
  company: string;
  homepage_url: string;
  d_day: number;
  description: string;
  department?: string; // 공모전일 경우 추가되는 필드
  target?: string; // 공모전일 경우 추가되는 필드
  field?: string; // 대외활동일 경우 추가되는 필드
  duration?: string; // 대외활동일 경우 추가되는 필드
};

export const fetchActivityContestDetailWith = async (
  id: number,
  mainCategory: string
): Promise<{
  data: ActivityContestDetail | null;
  error: PostgrestError | null;
}> => {
  try {
    let selectFields =
      'thumbnail_url, title, registration_date, view_count, start_date, end_date, company, homepage_url, d_day, description';

    if (mainCategory === '공모전') {
      selectFields += ', department, target';
    } else if (mainCategory === '대외활동') {
      selectFields += ', field, duration';
    }

    const { data, error } = await supabase
      .from('activities_contests')
      .select(selectFields)
      .eq('id', id)
      .single();

    if (error || !data) {
      return { data: null, error };
    }

    // data를 unknown으로 먼저 변환 후 ActivityContestDetail로 캐스팅
    return { data: data as unknown as ActivityContestDetail, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: null, error: error as PostgrestError };
  }
};
