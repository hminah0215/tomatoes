'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      {/* 검색어 상태를 children에 전달 */}
      {React.cloneElement(children as React.ReactElement, { query })}
      {/* {children} */}
    </>
  );
}
