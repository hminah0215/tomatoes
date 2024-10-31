import { supabase } from '@/lib/supabaseClient';
import { TomatoTipDataType } from '@/types/tomatoTips';
import { PostgrestError } from '@supabase/supabase-js';

export const fetchTomatoTipById = async (
  id: number
): Promise<{
  data: TomatoTipDataType | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase
    .from('tomato_tips')
    .select('id, title, author, created_at, content, link')
    .eq('id', id)
    .single();

  return { data, error };
};

export const fetchAllTomatoTips = async (): Promise<{
  data: TomatoTipDataType[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase.from('tomato_tips').select('*');

  if (error) {
    console.error('fetchAllTomatoTips 데이터가져오기 실패:', error);
  }

  return { data, error };
};

export const fetchThreeTomatoTips = async (): Promise<{
  data: TomatoTipDataType[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase
    .from('tomato_tips')
    .select('id, title, author, created_at, content, link')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('fetchThreeTomatoTips 데이터가져오기 실패:', error);
  }

  return { data, error };
};
