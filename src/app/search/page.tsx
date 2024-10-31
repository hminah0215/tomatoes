'use client';

import { Suspense, useState, useEffect } from 'react';
import { fetchSearchResults } from '@/lib/fetchSearchResults';
import SearchResults from '@/containers/search/SearchResults';
import NoResult from '@/components/common/noResult';
import SearchHeader from '@/containers/search/SearchHeader';
import SearchContent from '@/containers/search/SearchContent';
import { ClipLoader } from 'react-spinners';

export default function SearchPage() {
  const [query, setQuery] = useState(''); // Query 상태 관리
  const [activeTab, setActiveTab] = useState('전체');
  const [activeSort, setActiveSort] = useState('관련도순');
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<SearchResult[] | null>(null); // 초기 상태를 null로 설정

  const fetchResults = async () => {
    setLoading(true);
    const { data, error } = await fetchSearchResults(
      query,
      activeTab,
      activeSort
    );

    if (data) setResults(data);
    else if (error) console.error('검색 오류:', error);
    setLoading(false);
  };

  useEffect(() => {
    if (query) fetchResults();
  }, [query, activeTab, activeSort]);

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SearchContent onContentChange={setQuery} />
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <ClipLoader color="#E24444" loading={loading} size={50} />
        </div>
      ) : results && results.length > 0 ? (
        <>
          <SearchHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
          <SearchResults results={results} query={query} />
        </>
      ) : (
        <NoResult searchKeyword={query} />
      )}
    </Suspense>
  );
}
