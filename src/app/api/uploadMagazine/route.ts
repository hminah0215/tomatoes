import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// 토마토TIP 크롤링 데이터 타입 정의
interface TomatoTipDataType {
  title: string;
  link: string;
  content: string;
  author: string | null;
  created_at: string | null;
  views: string;
}

export async function POST(req: Request) {
  try {
    // 요청 본문에서 JSON 데이터를 가져오기
    const postData: TomatoTipDataType[] = await req.json();

    // 데이터베이스에서 이미 존재하는 데이터 가져오기 (link 기준)
    const { data: existingData, error: fetchError } = await supabase
      .from('tomato_tips')
      .select('link');

    if (fetchError) {
      console.error('기존 데이터 가져오기 실패:', fetchError);
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    // existingData가 null일 경우 빈 배열로 처리
    const existingLinks = new Set(existingData?.map((item) => item.link) || []); // null인 경우 빈 배열을 사용

    // 크롤링된 데이터 중에서 중복되지 않는 데이터만 필터링
    const newData = postData.filter((post) => !existingLinks.has(post.link));

    // 새로운 데이터가 있다면 삽입
    if (newData.length > 0) {
      const { error: insertError } = await supabase
        .from('tomato_tips')
        .upsert(newData, { onConflict: 'link' }); // link 기준으로 중복된 데이터는 건너뛰고 삽입

      if (insertError) {
        console.error('데이터 삽입 중 오류 발생:', insertError);
        return NextResponse.json(
          { error: insertError.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      message: '새로운 데이터만 추가되었습니다.',
    });
  } catch (err) {
    console.error('데이터 업로드 실패:', err);
    return NextResponse.json(
      { error: '데이터 업로드 실패', details: (err as Error).message },
      { status: 500 }
    );
  }
}

// 리팩토링 이전 코드
// export async function POST(req: Request) {
//   try {
//     // 요청 본문에서 JSON 데이터를 가져오기
//     // 이렇게 변경해서 GitHub Actions에서 JSON 데이터를 요청 본문에서 직접 읽어와서 사용하는게 가능해짐!
//     const postData: TomatoTipDataType[] = await req.json();

//     const today = new Date();
//     const currentDate = `${today.getFullYear()}-${String(
//       today.getMonth() + 1
//     ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

//     const formattedData = postData.map((item) => {
//       let createdAt;

//       if (item.created_at) {
//         // 작성일이 시간만 있는 경우 오늘 날짜와 결합
//         if (item.created_at.includes(':')) {
//           createdAt = `${currentDate} ${item.created_at}`;
//         } else {
//           // 작성일이 YYYY.MM.DD 형식인 경우 YYYY-MM-DD로 변환
//           createdAt = item.created_at.replace(/\./g, '-');
//         }
//       } else {
//         createdAt = null; // 작성일이 없는 경우 null로 설정
//       }

//       return {
//         title: item.title,
//         link: item.link,
//         content: item.content,
//         author: item.author,
//         created_at: createdAt,
//         views: parseInt(item.views, 10) || 0, // 조회수를 정수형으로 변환하여 추가
//       };
//     });

//     // tomato_tips 테이블의 기존 데이터 삭제
//     const { error: deletePostError } = await supabase
//       .from('tomato_tips')
//       .delete()
//       .gte('id', 1);

//     if (deletePostError) {
//       console.error('Failed to delete old post data:', deletePostError);
//       return NextResponse.json(
//         { error: deletePostError.message },
//         { status: 500 }
//       );
//     }

//     // 새로운 데이터 삽입
//     const { error: postError } = await supabase
//       .from('tomato_tips')
//       .insert(formattedData);

//     if (postError) {
//       console.error('Failed to insert new post data:', postError);
//       return NextResponse.json({ error: postError.message }, { status: 500 });
//     }

//     return NextResponse.json({
//       message: 'tomato_tips 테이블에 데이터가 정상적으로 삽입되었습니다',
//     });
//   } catch (err) {
//     console.error('tomato_tips 테이블 데이터 업로드 실패:', err);
//     return NextResponse.json(
//       { error: 'Failed to tomato_tips data', details: (err as Error).message },
//       { status: 500 }
//     );
//   }
// }
