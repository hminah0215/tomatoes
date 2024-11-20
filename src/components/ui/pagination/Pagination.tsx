'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import GridView from '../grid/GridView';
import PaginationControl from './PaginationControl';
import { notFound } from 'next/navigation';

/**
 * 페이지네이션 기능을 제공하는 컴포넌트입니다.
 * 그리드 형태로 아이템을 표시하고 페이지 이동 컨트롤을 제공합니다.
 *
 * @template T - 그리드에 표시될 아이템의 타입
 *
 * @param {Object} props - 컴포넌트 props
 * @param {T[]} props.items - 현재 페이지에 표시될 아이템 배열
 * @param {React.ComponentType<{item: T}>} props.GridItem - 각 아이템을 렌더링할 컴포넌트
 * @param {string} props.columnStyle - 그리드 컬럼 스타일 (tailwind CSS 클래스)
 * @param {string} props.gapStyle - 그리드 간격 스타일 (tailwind CSS 클래스)
 * @param {Object} props.pagination - 페이지네이션 정보
 * @param {number} props.pagination.currentPage - 현재 페이지 번호
 * @param {number} props.pagination.totalPages - 전체 페이지 수
 *
 * @returns {JSX.Element} 페이지네이션이 적용된 그리드 뷰
 *
 * @example
 * <Pagination
 *   items={products}
 *   GridItem={ActivityContestItem}
 *   columnStyle="web4mobile2"
 *   gapStyle="gapStyle2"
 *   pagination={{ currentPage: 1, totalPages: 5 }}
 * />
 *
 * @throws {NotFoundError} 현재 페이지가 유효하지 않은 범위일 경우 404 에러를 발생시킵니다.
 */

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
