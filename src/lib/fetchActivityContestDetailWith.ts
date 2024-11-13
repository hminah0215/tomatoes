import { supabase } from './supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

type TableName = 'tomato_activities' | 'tomato_contests';

/**
 * 특정 대외활동 또는 공모전의 상세 정보를 가져옵니다.
 *
 * @async
 * @function fetchActivityContestDetailWith
 * @param {number} id - 조회할 항목의 고유 식별자
 * @param {TableName} tableName - 조회할 테이블 이름 ('tomato_activities' 또는 'tomato_contests')
 *
 * @returns {Promise<{data: ActivityContestDetail | null, error: PostgrestError | null}>}
 *          Promise 객체는 다음을 포함합니다:
 *          - `data`: 조회된 항목의 상세 정보 또는 에러 발생 시 `null`
 *          - `error`: Supabase의 `PostgrestError` 객체 또는 에러가 없을 경우 `null`
 *
 * @example
 * // 대외활동 상세 정보 조회
 * const { data, error } = await fetchActivityContestDetailWith(1, 'tomato_activities');
 *
 * // 공모전 상세 정보 조회
 * const { data, error } = await fetchActivityContestDetailWith(1, 'tomato_contests');
 */
export const fetchActivityContestDetailWith = async (
  id: number,
  tableName: TableName
): Promise<{
  data: ActivityContestDetail | null;
  error: PostgrestError | null;
}> => {
  try {
    // 테이블에 따른 추가 필드 설정
    let selectFields =
      'thumbnail_url, title, registration_date, view_count, start_date, end_date, company, homepage_url, d_day, description';

    if (tableName === 'tomato_contests') {
      selectFields += ', department, target';
    } else if (tableName === 'tomato_activities') {
      selectFields += ', field, duration';
    }

    const { data, error } = await supabase
      .from(tableName)
      .select(selectFields)
      .eq('id', id)
      .single();

    if (error || !data) {
      return { data: null, error };
    }

    return { data: data as unknown as ActivityContestDetail, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: null, error: error as PostgrestError };
  }
};
