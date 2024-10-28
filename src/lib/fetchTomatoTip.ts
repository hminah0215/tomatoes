import { supabase } from '@/lib/supabaseClient';

export const fetchTomatoTip = async (id: number) => {
  const { data, error } = await supabase
    .from('tomato_tips')
    .select('title, author, created_at, content, link')
    .eq('id', id)
    .single();

  return { data, error };
};
