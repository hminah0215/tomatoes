import { supabase } from './supabaseClient';

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
