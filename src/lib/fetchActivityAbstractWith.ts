import { supabase } from './supabaseClient';

/**
 * Fetches abstracts from the `activities_contests` table in Supabase with filters and sorting options.
 *
 * @async
 * @function fetchActivityContestAbstractWith
 * @param {Object} params - The parameters for fetching data.
 * @param {string[]} [params.filters=[]] - List of filter values to apply on various columns.
 *                                         Available columns are: `field`, `activity`, `host`, `duration`, `region`,
 *                                         `department`, `prize_amount`, `prize_benefit`, `target`, `organizer`.
 * @param {string} [params.sort='관련도순'] - The sorting order. Options include:
 *                                          - `'관련도순'`: Sort by relevance (default).
 *                                          - `'최신순'`: Sort by newest.
 *                                          - `'조회순'`: Sort by view count.
 *                                          - `'마감순'`: Sort by deadline (ascending).
 * @param {string} params.mainCategory - The main category for filtering activities/contests.
 *
 * @returns {Promise<{data: Object[] | null, error: Error | null}>} A promise that resolves to an object containing:
 *                                                                  - `data`: Array of fetched records or `null` if an error occurred.
 *                                                                  - `error`: Error information or `null` if no error occurred.
 *
 * @throws Will throw an error if the Supabase query fails.
 *
 * @example
 * // Fetch data with specific filters and sort by '최신순'
 * const { data, error } = await fetchActivityContestAbstractWith({
 *   filters: ['IT', '서울'],
 *   sort: '최신순',
 *   mainCategory: 'contest',
 * });
 *
 * if (error) {
 *   console.error('Error fetching data:', error);
 * } else {
 *   console.log('Fetched data:', data);
 * }
 */
export async function fetchActivityContestAbstractWith({
  filters = [],
  sort = '관련도순',
  mainCategory,
}: FetchActivityContestAbstractParams) {
  try {
    let query = supabase
      .from('activities_contests')
      .select('*')
      .eq('main_category', mainCategory); // mainCategory를 변수로 적용

    if (filters.length > 0) {
      // 모든 컬럼에 대해 필터를 적용할 컬럼 목록
      const columns = [
        'field',
        'activity',
        'host',
        'duration',
        'region',
        'department',
        'prize_amount',
        'prize_benefit',
        'target',
        'organizer',
      ];

      // 각 필터값별로 OR 조건 생성
      let orConditions = '';

      filters.forEach((filter, index) => {
        // 각 컬럼에 대한 조건 생성
        const columnConditions = columns.map(
          (column) => `${column}.eq.${filter}`
        );

        // 현재 필터의 조건들을 OR로 결합
        if (index === 0) {
          orConditions = columnConditions.join(',');
        } else {
          orConditions += ',' + columnConditions.join(',');
        }
      });

      // OR 조건 적용
      query = query.or(orConditions);
    }

    switch (sort) {
      case '최신순':
      case '관련도순':
        query = query.order('registration_date', { ascending: false });
        break;
      case '조회순':
        query = query.order('view_count', { ascending: false });
        break;
      case '마감순':
        query = query.order('d_day', { ascending: true });
        break;
      default:
        query = query.order('registration_date', { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('에러 발생:', error);
    return { data: null, error };
  }
}
