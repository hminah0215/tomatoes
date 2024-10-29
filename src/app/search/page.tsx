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

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        const { data, error } = await fetchSearchResults(query);
        if (data) {
          setResults(data);
        } else if (error) {
          console.error('검색 오류:', error);
        }
      };
      fetchResults();
    }
  }, [query]);

  return (
    <>
      {results.length > 0 ? (
        <>
          <SearchHeader />
          <SearchResults results={results} />
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
}
