'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchSearchResults } from '@/lib/fetchSearchResults';
import SearchResults from '@/containers/search/SearchResults';
import NoResult from '@/components/common/noResult';
import SearchHeader from '@/containers/search/SearchHeader';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState('전체');
  const [activeSort, setActiveSort] = useState('관련도순');

  const fetchResults = async () => {
    const { data, error } = await fetchSearchResults(
      query,
      activeTab,
      activeSort
    ); // 선택한 탭과 정렬 기준 전달
    if (data) {
      setResults(data);
    } else if (error) {
      console.error('검색 오류:', error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, activeTab, activeSort]);

  return (
    <>
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
        <NoResult />
      )}
    </>
  );
}
