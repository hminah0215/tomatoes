import Image from 'next/image';
import Link from 'next/link';
import SearchDdayDisplay from './SearchDdayDisplay';
import Tag from '@/components/common/Tag';
import { getTagLabel } from '@/utils/getTagLabel';

export default function SearchResults({ results, query }: SearchResultsProps) {
  // 검색 결과 클릭시 페이지 이동
  const getResultHref = (result: SearchResult) => {
    if (result.link) return `/magazine/tomatoTip/${result.id}`;
    if (result.main_category === '공모전') return `/contest/${result.id}`;
    if (result.main_category === '대외활동') return `/activity/${result.id}`;
    return '#';
  };

  // 썸네일 URL 설정 함수
  const getThumbnailUrl = (result: SearchResult, index: number) => {
    const thumbnailImages = [
      `/assets/magazine/PC_tips_thumbnail_1.svg`,
      `/assets/magazine/PC_tips_thumbnail_2.svg`,
      `/assets/magazine/PC_tips_thumbnail_3.svg`,
    ];

    // Supabase 썸네일 URL이 없으면 순차적 썸네일 이미지 제공
    return (
      result.thumbnail_url || thumbnailImages[index % thumbnailImages.length]
    );
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start px-[28px] py-[20px] md:px-[88px] md:py-[56px]">
        <div className="mb-4 text-lg font-semibold text-gray-900">
          <span className="text-point-red-500">&apos;{`${query}`}&apos;</span>에
          대한 검색 결과 총 {results.length}건
        </div>
        <div className="relative w-full items-center justify-between rounded-[20px] border border-sub-gray-100 px-[20px] md:px-[48px]">
          {results.map((result, index) => {
            const tagLabel = getTagLabel(result.views, result.created_at);
            return (
              <Link key={result.id} href={getResultHref(result)}>
                <div className="flex items-center gap-6 border-b-[1px] py-[32px]">
                  <div className="flex h-[100px] w-[88px] md:h-[168px] md:w-[140px]">
                    <Image
                      src={getThumbnailUrl(result, index)}
                      alt="Search Image"
                      width={140}
                      height={168}
                    />
                  </div>
                  <div className="flex h-[158px] flex-col items-start gap-3 pl-[14px]">
                    <div className="flex">
                      <div className="inline-flex h-[22px] items-center justify-center gap-2.5 rounded-[100px] bg-sub-gray-500 px-3 py-1 shadow md:h-[38px]">
                        <div className="text-center text-[10px] font-medium leading-[30px] text-main-white md:text-xl">
                          {result.main_category === '공모전' && '공모전'}
                          {result.main_category === '대외활동' && '대외활동'}
                          {result.link && '매거진'}
                        </div>
                      </div>
                      <div className="ml-[12px] text-[12px] font-medium text-sub-gray-400 md:text-[20px]">
                        {result.company}
                      </div>
                    </div>
                    <div className="flex h-[76px] flex-shrink-0 overflow-hidden text-[14px] font-semibold text-sub-gray-500 md:text-[24px] lg:text-[32px]">
                      {result.title}
                    </div>
                    <div className="text-[12px] font-medium text-sub-gray-300 md:text-xl">
                      조회{' '}
                      {(
                        (result.main_category === '공모전' ||
                        result.main_category === '대외활동'
                          ? result.view_count
                          : result.views) ?? 0
                      ).toLocaleString()}
                      회
                    </div>
                  </div>
                  <div className="absolute right-[48px] hidden md:block">
                    {result.main_category === '공모전' ||
                    result.main_category === '대외활동' ? (
                      <SearchDdayDisplay d_day={result.d_day} />
                    ) : (
                      <div className="">
                        <Tag type={tagLabel} label={tagLabel.toUpperCase()} />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
