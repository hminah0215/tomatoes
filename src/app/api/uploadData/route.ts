// app/api/uploadData/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabaseClient';

type ReceptionPeriod = {
  start_date: string;
  end_date: string;
};

type ActivityContestItem = {
  title: string;
  company: string;
  view_count: number;
  thumbnail_url: string;
  reception_period: ReceptionPeriod;
  award_info: string;
  dominant_color: string;
  description: string;
  main_category: '공모전' | '대외활동';
  homepage_url: string;
  registration_date: string;
  field?: string;
  activity?: string;
  host?: string;
  duration?: string;
  region?: string;
  department?: string;
  prize_amount?: string;
  prize_benefit?: string;
  target?: string;
  organizer?: string;
};

export async function POST() {
  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'scripts',
      'activity_contest.json'
    );
    const postData: ActivityContestItem[] = JSON.parse(
      fs.readFileSync(filePath, 'utf-8')
    );

    const { error: deleteError } = await supabase
      .from('activities_contests')
      .delete()
      .gte('id', 1);

    if (deleteError) {
      console.error('Failed to delete old data:', deleteError);
      return NextResponse.json({ error: deleteError.message }, { status: 500 });
    }

    console.log('activities_contests 테이블의 모든 데이터가 삭제되었습니다.');

    // 'reception_period'를 'start_date'와 'end_date'로 분리하여 저장
    const formattedData = postData.map((item) => ({
      title: item.title,
      company: item.company,
      view_count: item.view_count,
      thumbnail_url: item.thumbnail_url,
      start_date: item.reception_period.start_date,
      end_date: item.reception_period.end_date,
      award_info: item.award_info,
      dominant_color: item.dominant_color,
      description: item.description,
      main_category: item.main_category,
      homepage_url: item.homepage_url,
      registration_date: item.registration_date,
      field: item.field,
      activity: item.activity,
      host: item.host,
      duration: item.duration,
      region: item.region,
      department: item.department,
      prize_amount: item.prize_amount,
      prize_benefit: item.prize_benefit,
      target: item.target,
      organizer: item.organizer,
    }));

    const { error: insertError } = await supabase
      .from('activities_contests')
      .insert(formattedData);

    if (insertError) {
      console.error('Failed to insert new data:', insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({
      message:
        'activities_contests 테이블에 데이터가 정상적으로 삽입되었습니다',
    });
  } catch (err) {
    console.error('activities_contests 테이블 데이터 업로드 실패:', err);
    return NextResponse.json(
      { error: 'Failed to upload data', details: (err as Error).message },
      { status: 500 }
    );
  }
}
