import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';

interface TomatoTipDataType {
  title: string;
  link: string;
  content: string;
  author: string | null;
  created_at: string | null;
  views: string;
}

export async function POST() {
  try {
    const postFilePath = path.join(
      process.cwd(),
      'src',
      'scripts',
      'tomatoTip_data.json'
    );

    const postData: TomatoTipDataType[] = JSON.parse(
      fs.readFileSync(postFilePath, 'utf-8')
    );

    const today = new Date();
    const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const formattedData = postData.map((item) => {
      let createdAt;

      if (item.created_at) {
        if (item.created_at.includes(':')) {
          createdAt = `${currentDate} ${item.created_at}`; 
        } else {
          createdAt = item.created_at.replace(/\./g, '-');
        }
      } else {
        createdAt = null; 
      }

      return {
        title: item.title,
        link: item.link,
        content: item.content,
        author: item.author,
        created_at: createdAt,
        views: parseInt(item.views, 10) || 0,
      };
    });

    const { error: deletePostError } = await supabase
      .from('tomato_tips')
      .delete()
      .gte('id', 1); 

    if (deletePostError) {
      console.error('Failed to delete old post data:', deletePostError);
      return NextResponse.json(
        { error: deletePostError.message },
        { status: 500 }
      );
    }

    console.log('tomato_tips 테이블의 모든 데이터가 삭제되었습니다.');

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
