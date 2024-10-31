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
  department?: string;
  target?: string;
  field?: string;
  duration?: string;
};

/**
 * Fetches detailed information for a specific activity or contest item from Supabase.
 *
 * @async
 * @function fetchActivityContestDetailWith
 * @param {number} id - The unique identifier of the activity or contest item.
 * @param {string} mainCategory - The main category, which determines additional fields to include.
 *                                - `'공모전'`: Includes `department` and `target` fields.
 *                                - `'대외활동'`: Includes `field` and `duration` fields.
 *
 * @returns {Promise<{data: ActivityContestDetail | null, error: PostgrestError | null}>}
 *          A promise that resolves to an object containing:
 *          - `data`: The detailed information of the specified item or `null` if an error occurred.
 *          - `error`: Supabase's `PostgrestError` object or `null` if no error occurred.
 *
 * @throws Will log an error if the data fetching fails.
 *
 * @example
 * // Fetch the details of an activity with ID 1 and main category '대외활동'
 * const { data, error } = await fetchActivityContestDetailWith(1, '대외활동');
 *
 * if (error) {
 *   console.error('Error fetching detail:', error);
 * } else {
 *   console.log('Activity Contest Detail:', data);
 * }
 */
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
