import { supabase } from '@/lib/supabaseClient';

export const fetchSearchResults = async (
  query: string,
  category: string,
  sortOption: string
) => {
  let request = supabase.rpc('search_tomato_tips', { query });

  // 카테고리 필터 추가
  if (category !== '전체') {
    request = request.eq('category', category);
  }

  // 정렬 옵션 추가
  if (sortOption === '최신순') {
    request = request.order('created_at', { ascending: false });
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
