import type { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { fetchBestPickAll } from '@/lib/fetchBestPickGridView';

const TABLE_MAPPING = {
  activity: 'tomato_activities',
  contest: 'tomato_contests',
  tips: 'tomato_tips',
} as const;

/**
 * 데이터베이스 쿼리에 필터 조건을 적용합니다.
 * activity와 contest 카테고리에만 필터가 적용됩니다.
 * @template T - CategoryType의 키 타입
 * @param query - Supabase 쿼리 객체
 * @param category - 데이터 카테고리 ('activity' | 'contest' | 'tips')
 * @param filters - 적용할 필터 문자열 배열
 * @returns 필터가 적용된 쿼리 객체
 */
function applyFilters<T extends keyof CategoryType>(
  query: SupabaseClient['from']['prototype']['select'],
  category: T,
  filters?: string[]
) {
  if (!filters?.length || (category !== 'activity' && category !== 'contest')) {
    return query;
  }

  const filterColumns =
    category === 'activity'
      ? ['field', 'activity', 'host', 'duration', 'region']
      : ['department', 'prize_amount', 'prize_benefit', 'target', 'organizer'];

  const orConditions = filters.flatMap((filter) =>
    filterColumns.map((column) => `${column}.ilike.%${filter}%`)
  );

  return orConditions.length > 0 ? query.or(orConditions.join(',')) : query;
}

/**
 * 데이터베이스 쿼리에 정렬 조건을 적용합니다.
 * activity와 contest 카테고리는 지정된 정렬 옵션을 사용하고,
 * tips 카테고리는 생성일 기준 내림차순으로 정렬됩니다.
 * @template T - CategoryType의 키 타입
 * @param query - Supabase 쿼리 객체
 * @param category - 데이터 카테고리 ('activity' | 'contest' | 'tips')
 * @param sort - 정렬 옵션
 * @returns 정렬이 적용된 쿼리 객체
 */
function applySort<T extends keyof CategoryType>(
  query: SupabaseClient['from']['prototype']['select'],
  category: T,
  sort?: '관련도순' | '최신순' | '조회순' | '마감순'
) {
  if (category === 'activity' || category === 'contest') {
    switch (sort) {
      case '최신순':
        return query.order('registration_date', { ascending: false });
      case '조회순':
        return query.order('view_count', { ascending: false });
      case '마감순':
        return query.order('d_day', { ascending: true });
      default:
        return query.order('registration_date', { ascending: false });
    }
  }

  return query.order('created_at', { ascending: false });
}

/**
 * 데이터베이스 쿼리에 페이지네이션을 적용합니다.
 * @param query - Supabase 쿼리 객체
 * @param page - 현재 페이지 번호
 * @param itemsPerPage - 페이지당 항목 수
 * @returns 페이지네이션이 적용된 쿼리 객체
 */
function applyPagination(
  query: SupabaseClient['from']['prototype']['select'],
  page: number,
  itemsPerPage: number
) {
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;
  return query.range(from, to);
}

/**
 * 대외활동, 공모전, 팁 데이터를 페이지네이션, 필터링, 정렬하여 가져오는 함수입니다.
 *
 * @template T - CategoryType의 키 타입 ('activity' | 'contest' | 'tips')
 * @param options - 페이지네이션 옵션
 * @param options.page - 현재 페이지 번호 (기본값: 1)
 * @param options.itemsPerPage - 페이지당 항목 수 (기본값: 10)
 * @param options.category - 데이터 카테고리
 * @param options.filters - 필터 조건 배열 (activity, contest 카테고리만 적용)
 * @param options.sort - 정렬 옵션 (activity, contest 카테고리만 적용)
 *
 * @returns 페이지네이션된 데이터와 메타 정보
 *
 * @example
 * // 대외활동 데이터 조회
 * const result = await fetchPaginatedData({
 *   category: 'activity',
 *   page: 1,
 *   itemsPerPage: 10,
 *   filters: ['서울', '마케팅'],
 *   sort: '최신순'
 * });
 *
 * // 팁 데이터 조회 (필터, 정렬 옵션 없이)
 * const tips = await fetchPaginatedData({
 *   category: 'tips',
 *   page: 1,
 *   itemsPerPage: 20
 * });
 */
export async function fetchPaginatedData<T extends keyof CategoryType>({
  page = 1,
  itemsPerPage = 10,
  category,
  filters,
  sort,
}: PaginationParams<T>): Promise<PaginationResult<CategoryType[T]>> {
  try {
    const tableName = TABLE_MAPPING[category];

    let query = supabase.from(tableName).select('*', { count: 'exact' });
    query = applyFilters(query, category, filters);
    query = applySort(query, category, sort);
    query = applyPagination(query, page, itemsPerPage);

    const { data, count, error } = await query;

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return {
      data: data as CategoryType[T][],
      totalCount,
      totalPages,
      currentPage: page,
      error: null,
    };
  } catch (error) {
    console.error('데이터 fetch 중 에러 발생:', error);
    return {
      data: null,
      totalCount: 0,
      totalPages: 0,
      currentPage: page,
      error: error as Error,
    };
  }
}

// 토마토 TIP 페이지네이션 데이터
export async function fetchPaginatedTomatoTips({
  page = 1,
  itemsPerPage = 12,
}: {
  page?: number;
  itemsPerPage?: number;
}): Promise<PaginationResult<TomatoTipDataType>> {
  try {
    const tableName = 'tomato_tips'; // 토마토팁 데이터 테이블

    let query = supabase.from(tableName).select('*', { count: 'exact' });

    // 최신순으로 정렬 (created_at 기준으로 내림차순)
    query = query.order('created_at', { ascending: false });

    query = applyPagination(query, page, itemsPerPage); // 페이지네이션만 적용

    const { data, count, error } = await query;

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return {
      data: data as TomatoTipDataType[],
      totalCount,
      totalPages,
      currentPage: page,
      error: null,
    };
  } catch (error) {
    console.error('토마토팁 데이터 fetch 중 에러 발생:', error);
    return {
      data: null,
      totalCount: 0,
      totalPages: 0,
      currentPage: page,
      error: error as Error,
    };
  }
}

// 토마토 PICK 페이지네이션 데이터
export async function fetchPaginatedBestPicks({
  page = 1,
  itemsPerPage = 8,
}: {
  page?: number;
  itemsPerPage?: number;
}) {
  try {
    const { data, error, count } = await fetchBestPickAll(); // 기존 데이터 가져오는 함수 호출

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    // 페이지네이션 적용
    const paginatedData = data.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );

    return {
      data: paginatedData,
      totalCount,
      totalPages,
      currentPage: page,
      error: null,
    };
  } catch (error) {
    console.error('토마토 Pick 데이터 가져오기 실패:', error);
    return {
      data: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: page,
      error: error as Error,
    };
  }
}
