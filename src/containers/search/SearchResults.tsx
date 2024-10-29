// components/SearchResults.tsx
import NoResult from '@/components/common/noResult';
import Link from 'next/link';

interface SearchResult {
  id: number;
  title: string;
  author: string;
  content: string;
  link: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return <NoResult />; // 검색 결과가 없을 때 noResult 컴포넌트 표시
  }

  return (
    <div className="search-results">
      {results.map((result) => (
        <Link key={result.id} href={result.link}>
          <div className="result-item border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold">{result.title}</h2>
            <p className="text-sm text-gray-500">작성자: {result.author}</p>
            <p className="text-sm text-gray-700">{result.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
