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
    .select('*')
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
    .select('*')
    .order('created_at', { ascending: false }); // created_at을 기준으로 내림차순 정렬

  if (error) {
    console.error('fetchAllTomatoTips 데이터가져오기 실패:', error);
  }

  return { data, error };
};

// 지금 꼭 봐야하는 매거진 - 조회수 상위 3개만 가져오기
// 데이터 전송량을 줄이고 클라이언트에서 필터링 작업을 할 필요없도록 생성한 함수
export const fetchThreeTomatoTips = async (): Promise<{
  data: TomatoTipDataType[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabase
    .from('tomato_tips')
    .select('*')
    .order('views', { ascending: false }) // 조회수 순으로 내림차순 정렬
    .limit(3); // 상위 3개만 가져오기

  if (error) {
    console.error('fetchThreeTomatoTips 데이터가져오기 실패:', error);
  }

  return { data, error };
};
