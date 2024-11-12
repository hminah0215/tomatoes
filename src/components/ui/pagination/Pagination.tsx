'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import GridView from '../grid/GridView';
import PaginationControl from './PaginationControl';
import { notFound } from 'next/navigation';

export default function Pagination<T>({
  items,
  GridItem,
  columnStyle,
  gapStyle,
  pagination,
}: PaginationUIProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentPage, totalPages } = pagination;

  if (currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      const newQuery = new URLSearchParams(searchParams);
      newQuery.set('page', String(page));
      router.push(`?${newQuery.toString()}`);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <GridView<T>
        items={items}
        GridItem={GridItem}
        columnStyle={columnStyle}
        gapStyle={gapStyle}
      />
      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
