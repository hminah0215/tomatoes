import { supabase } from '@/lib/supabaseClient';

export const fetchSearchResults = async (
  query: string,
  category: string,
  sortOption: string
) => {
  // 관련도 점수 계산 함수
  const calculateRelevanceScore = (item: any, query: string) => {
    const title = item.title || '';
    const content = item.content || item.description || '';

    if (title.includes(query) && content.includes(query)) {
      return 3; // 제목과 본문 모두 포함
    } else if (title.includes(query)) {
      return 2; // 제목에만 포함
    } else if (content.includes(query)) {
      return 1; // 본문에만 포함
    }
    return 0; // 포함되지 않음
  };

  // 데이터 정렬 함수
  const sortData = (data: any[], option: string) => {
    if (option === '최신순') {
      return data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (option === '조회순') {
      return data.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
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
