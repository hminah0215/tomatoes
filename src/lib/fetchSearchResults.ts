// lib/fetchSearchResults.ts
import { supabase } from '@/lib/supabaseClient';

export const fetchSearchResults = async (query: string) => {
  const { data, error } = await supabase.rpc('search_tomato_tips', { query });
  if (error) {
    console.error('Error fetching search results:', error);
  }
  return { data, error };
};
