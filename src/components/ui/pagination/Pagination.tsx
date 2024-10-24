'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import GridView from '../grid/GridView';
import PaginationControl from './PaginationControl';

function Pagination({ contents = [] }: { contents: Activities }) {
  // 기본값 빈 배열
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();

  // 경로에 따라 한 페이지당 아이템 개수를 설정
  const itemsPerPage = ['/activity', '/contest'].includes(pathname) ? 16 : 8;

  const totalItems = contents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 현재 페이지에 표시될 컨텐츠 계산
  const currentItems = contents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="mx-[88px] flex flex-col gap-4 md:gap-6">
      <span className="text-sm text-sub-gray-200 md:text-xl md:font-medium">
        검색결과 {contents.length}건
      </span>
      <GridView activities={currentItems} />
      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default Pagination;
