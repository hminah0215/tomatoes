'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchContent({
  onContentChange,
}: {
  onContentChange: (query: string) => void;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    onContentChange(query); // 쿼리가 바뀔 때 상위 컴포넌트에 전달
  }, [query, onContentChange]);

  return null;
}
