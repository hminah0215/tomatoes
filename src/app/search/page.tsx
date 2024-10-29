// pages/search/page.tsx
'use client';

import { useState, useEffect } from 'react';

import { fetchSearchResults } from '@/lib/fetchSearchResults';

import SearchResults from '@/containers/search/SearchResults';
import SearchHeader from '@/containers/search/SearchHeader';
import NoResult from '@/components/common/noResult';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
  };

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
          <SearchHeader onSearch={handleSearch} />
          <SearchResults results={results} />
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
}
