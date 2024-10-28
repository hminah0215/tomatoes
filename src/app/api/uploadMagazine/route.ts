import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';

// curl -X POST http://localhost:3000/api/uploadMagazine

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

    // 현재 날짜 가져오기
    const today = new Date();
    const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    // created_at 형식 변환
    const formattedData = postData.map((item) => {
      let createdAt;

      if (item.created_at) {
        // created_at이 시간만 있는 경우
        // 크롤링할때 작성된지 24시간이 지나지 않은 글은
        // 날짜없이 23:56 이렇게 시간만 나와있어서 그렇게 가져와져가지고
        // {"error":"invalid input syntax for type timestamp: \"23:56\""} 이런에러가 남
        if (item.created_at.includes(':')) {
          createdAt = `${currentDate} ${item.created_at}`; // 오늘 날짜와 시간 결합
        } else {
          createdAt = item.created_at.replace(/\./g, '-'); // 'YYYY.MM.DD' 형식으로 변경
        }
      } else {
        createdAt = null; // created_at이 없으면 null
      }

      return {
        title: item.title,
        link: item.link,
        content: item.content,
        author: item.author,
        created_at: createdAt,
      };
    });

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
      .insert(formattedData);

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
