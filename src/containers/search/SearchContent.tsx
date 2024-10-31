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
    onContentChange(query);
  }, [query, onContentChange]);

  return null;
}
