'use client';

import { Suspense, useState, useEffect } from 'react';
import { fetchSearchResults } from '@/lib/fetchSearchResults';
import SearchResults from '@/containers/search/SearchResults';
import NoResult from '@/components/common/noResult';
import SearchHeader from '@/containers/search/SearchHeader';
import SearchContent from '@/containers/search/SearchContent';

export default function SearchPage() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState(''); // Query 상태 관리
  const [activeTab, setActiveTab] = useState('전체');
  const [activeSort, setActiveSort] = useState('관련도순');

  const fetchResults = async () => {
    const { data, error } = await fetchSearchResults(
      query,
      activeTab,
      activeSort
    );
    if (data) setResults(data);
    else if (error) console.error('검색 오류:', error);
  };

  useEffect(() => {
    if (query) fetchResults();
  }, [query, activeTab, activeSort]);

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SearchContent onContentChange={setQuery} />
      {results.length > 0 ? (
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
