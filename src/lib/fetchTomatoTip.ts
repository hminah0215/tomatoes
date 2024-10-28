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

// 모든 데이터를 가져오는 함수, 매거진 리스트를 보일때 사용
export const fetchAllTomatoTips = async (): Promise<{
  data: TomatoTipDataType[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase
    .from('tomato_tips')
    .select('id, title, author, created_at, content, link');
  return { data, error };
};
