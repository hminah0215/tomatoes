import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface TomatoTipDetailProps {
  id: number; // URL로부터 받아온 id 값
}

interface Tip {
  title: string;
  author: string;
  created_at: string;
  content: string;
  link: string;
}

const TomatoTipDetail = ({ id }: TomatoTipDetailProps) => {
  const [tip, setTip] = useState<Tip | null>(null);

  useEffect(() => {
    const fetchTip = async () => {
      const { data } = await supabase
        .from('tomato_tips')
        .select('title, author, created_at, content, link')
        .eq('id', id)
        .single();
      if (data) {
        setTip(data as Tip); // Tip 타입으로 캐스팅
      }
    };
    fetchTip();
  }, [id]);

  return (
    <>
      {/* 콘텐츠 영역 */}
      <div className="relative mx-auto ml-[302px] mr-[306px] flex flex-col items-center">
        {/* 콘텐츠 섹션 */}
        <div className="relative mt-[56px] w-full rounded-lg">
          {/* tip이 로드되었을 때만 렌더링 */}
          {tip && (
            <>
              {/* 제목, 작성자, 작성일 */}
              <h1 className="mb-3 text-5xl font-bold leading-tight text-sub-gray-500">
                {tip.title}
              </h1>
              <p className="mb-[23px] ml-[6px] text-base text-sub-gray-300">
                작성자 : {tip.author} | 작성일 :{' '}
                {new Date(tip.created_at).toLocaleDateString()}
              </p>

              {/* 회색줄 */}
              <div className="relative mb-[52px] h-[2px] w-full bg-sub-gray-100"></div>

              {/* 내용 */}
              <div className="space-y-4 text-2xl leading-8 text-sub-gray-500">
                <div
                  dangerouslySetInnerHTML={{ __html: tip.content }}
                  className="text-2xl font-normal"
                />
              </div>

              {/* 원본 링크 */}
              {tip.link && (
                <div className="mt-8">
                  <a
                    href={tip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    ▶️ 원본 글 보기
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TomatoTipDetail;
