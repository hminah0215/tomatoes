import { supabase } from '@/lib/supabaseClient';

export const fetchSearchResults = async (
  query: string,
  category: string,
  sortOption: string
) => {
  let request = supabase.rpc('search_tomato_tips', { query });

  if (category !== '전체') {
    request = request.eq('category', category);
  }

  if (sortOption === '최신순') {
    request = request.order('created_at', { ascending: false });
  }

  const { data, error } = await request;
  if (error) {
    console.error('Error fetching search results:', error);
  }
  return { data, error };
};