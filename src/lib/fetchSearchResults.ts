import { supabase } from '@/lib/supabaseClient';
import { calculateRelevanceScore } from '@/utils/calculateRelevanceScore';

export const fetchSearchResults = async (
  query: string,
  category: string,
  sortOption: string
) => {
  // 데이터 정렬 함수
  const sortData = (data: SearchResult[], option: string) => {
    if (option === '최신순') {
      return data.sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });
    } else if (option === '조회순') {
      return data.sort((a, b) => {
        const viewsA =
          a.main_category === '공모전' || a.main_category === '대외활동'
            ? a.view_count
            : a.views;
        const viewsB =
          b.main_category === '공모전' || b.main_category === '대외활동'
            ? b.view_count
            : b.views;
        return (viewsB || 0) - (viewsA || 0);
      });
    } else if (option === '관련도순') {
      return data.sort(
        (a, b) =>
          calculateRelevanceScore(b, query) - calculateRelevanceScore(a, query)
      );
    }
    return data;
  };

  // 전체 카테고리일 때 처리 함수
  const fetchAllCategories = async () => {
    const { data: magazineData, error: magazineError } = await supabase.rpc(
      'search_tomato_tips',
      { query }
    );
    const { data: contestData, error: contestError } = await supabase.rpc(
      'search_contests',
      { query }
    );
    const { data: activityData, error: activityError } = await supabase.rpc(
      'search_activities',
      { query }
    );

    const combinedData = [
      ...(magazineData || []),
      ...(contestData || []),
      ...(activityData || []),
    ];
    const combinedError = magazineError || contestError || activityError;

    if (combinedError) {
      console.error('Error fetching search results:', combinedError);
    }

    return { data: sortData(combinedData, sortOption), error: combinedError };
  };

  // 카테고리별 RPC 선택 및 정렬 옵션 적용
  let data, error;
  if (category === '매거진') {
    ({ data, error } = await supabase.rpc('search_tomato_tips', { query }));
  } else if (category === '공모전') {
    ({ data, error } = await supabase.rpc('search_contests', { query }));
  } else if (category === '대외활동') {
    ({ data, error } = await supabase.rpc('search_activities', { query }));
  } else {
    // 전체 카테고리의 경우 각 RPC 결과를 병합하여 반환
    return fetchAllCategories();
  }

  if (error) {
    console.error('Error fetching search results:', error);
    return { data: [], error };
  }

  // 단일 카테고리의 경우 정렬 옵션 적용
  return { data: sortData(data, sortOption), error };
};
