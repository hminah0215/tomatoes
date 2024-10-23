import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';

// 토마토TIP 크롤링 데이터 타입 정의
interface TomatoTipDataType {
  title: string;
  link: string;
  content: string;
  author: string | null;
  created_at: string | null;
}

export async function POST() {
  try {
    // JSON 파일 경로 설정
    const postFilePath = path.join(
      process.cwd(),
      'src',
      'scripts',
      'tomatoTip_data.json'
    );

    // JSON 파일에서 데이터 읽어오기
    const postData: TomatoTipDataType[] = JSON.parse(
      fs.readFileSync(postFilePath, 'utf-8')
    );

    // tomato_tips 테이블의 기존 데이터 삭제
    // (현재 수동으로 크롤링코드를 실행시키므로 일단 OLD데이터 삭제처리 )
    const { error: deletePostError } = await supabase
      .from('tomato_tips')
      .delete()
      .gte('id', 1); // 'id'가 1 이상인 모든 데이터를 삭제

    if (deletePostError) {
      console.error('Failed to delete old post data:', deletePostError);
      return NextResponse.json(
        { error: deletePostError.message },
        { status: 500 }
      );
    }

    // 삭제 성공 메시지
    console.log('tomato_tips 테이블의 모든 데이터가 삭제되었습니다.');

    // tomato_tips 테이블에 새로운 데이터 삽입
    const { error: postError } = await supabase
      .from('tomato_tips')
      .insert(postData);

    if (postError) {
      console.error('Failed to insert new post data:', postError);
      return NextResponse.json({ error: postError.message }, { status: 500 });
    }

    return NextResponse.json({
      message: 'tomato_tips 테이블에 데이터가 정상적으로 삽입되었습니다',
    });
  } catch (err) {
    console.error('tomato_tips 테이블 데이터 업로드 실패:', err);
    return NextResponse.json(
      { error: 'Failed to tomato_tips data', details: (err as Error).message },
      { status: 500 }
    );
  }
}
