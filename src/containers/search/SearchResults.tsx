// components/SearchResults.tsx
import NoResult from '@/components/common/noResult';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return <NoResult searchKeyword={query} />;
  }

  const getResultHref = (result: SearchResult) => {
    if (result.link) return `/magazine/tomatoTip/${result.id}`;
    if (result.main_category === '공모전') return `/contest/${result.id}`;
    if (result.main_category === '대외활동') return `/activity/${result.id}`;
    return '#';
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start px-[88px] py-[56px]">
        <div className="mb-4 text-lg font-semibold text-gray-900">
          <span className="text-point-red-500">&apos;{`${query}`}&apos;</span>에
          대한 검색 결과 총 {results.length}건
        </div>
        <div className="w-full items-center justify-between rounded-[20px] border border-sub-gray-100 px-[48px]">
          {results.map((result) => (
            <Link key={result.id} href={getResultHref(result)}>
              <div className="flex items-center gap-6 border-b-[1px] py-[32px]">
                <Image
                  src={result.thumbnail_url || '/assets/test_image.png'}
                  alt="Search Image"
                  width={140}
                  height={168}
                />
                <div className="flex flex-col items-start gap-3 pl-[14px]">
                  <div className="flex">
                    <div>공모전</div>
                    <div className="ml-[12px] text-[20px] font-medium text-sub-gray-400">
                      {result.company}
                    </div>
                  </div>
                  <div className="text-[32px] font-semibold text-sub-gray-500">
                    {result.title}
                  </div>
                  <div className="text-xl font-medium text-sub-gray-300">
                    조회 {(result.view_count ?? 0).toLocaleString()}회
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
