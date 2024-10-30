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

  useEffect(() => {
    if (query) {
      console.log('검색어:', query);

      const fetchResults = async () => {
        const { data, error } = await fetchSearchResults(
          query,
          activeTab,
          activeSort
        );
        if (data) setResults(data);
        else if (error) console.error('검색 오류:', error);
      };
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
