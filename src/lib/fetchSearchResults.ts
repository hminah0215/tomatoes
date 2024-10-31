import { supabase } from '@/lib/supabaseClient';

export const fetchSearchResults = async (
  query: string,
  category: string,
  sortOption: string
) => {
  let request;

  // 카테고리 필터 추가
  // 카테고리에 따라 RPC 선택
  if (category === '매거진') {
    request = supabase.rpc('search_tomato_tips', { query });
  } else if (category === '공모전') {
    request = supabase.rpc('search_contests', { query });
  } else if (category === '대외활동') {
    request = supabase.rpc('search_activities', { query });
  } else {
    // 전체인 경우 모든 카테고리에서 검색 결과를 가져오기
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

    const combinedData = [...(magazineData || []), ...(contestData || []), ...(activityData || [])];
    const combinedError = magazineError || contestError || activityError;

    // 에러가 발생한 경우 로그를 출력하고 리턴
    if (combinedError) {
      console.error('Error fetching search results:', combinedError);
    }

    // 정렬 옵션 적용
    if (sortOption === '최신순') {
      combinedData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sortOption === '조회순') {
      combinedData.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
    }

    return { data: combinedData, error: combinedError };
  }
  }

  // 정렬 옵션 추가
  if (sortOption === '최신순') {
    request = request.order('created_at', { ascending: false });
  } else if (sortOption === '조회순') {
    request = request.order('view_count', { ascending: false });
  }

  const { data, error } = await request;
  if (error) {
    console.error('Error fetching search results:', error);
  }
  return { data, error };
};

// } else if (sortOption === '조회순') {
//   request = request.order('view_count', { ascending: false });
// } else if (sortOption === '관련도순') {
//   request = request.order('relevance', { ascending: false });
