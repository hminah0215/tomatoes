// Pagination.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import GridView from '../grid/GridView';
import PaginationControl from './PaginationControl';
import useResponsiveItemsPerPage from '@/hooks/useResponsiveItemsPerPage';
import { notFound } from 'next/navigation';

/**
 * Pagination 컴포넌트는 주어진 콘텐츠를 그리드 형식으로 페이징 처리하여 렌더링합니다.
 * 화면 크기에 따라 한 페이지당 아이템 수를 조절하고, 페이지네이션을 적용하여 사용자에게 콘텐츠를 나눠서 보여줍니다.
 *
 * @template T - 콘텐츠의 항목 타입을 나타냅니다.
 *
 * @param {T[]} contents - 페이징 처리할 전체 콘텐츠 배열입니다.
 * @param {React.ComponentType<GridItemProps<T>>} GridItem - 각 콘텐츠 항목을 렌더링할 컴포넌트입니다.
 * @param {number} webItemPerPage - 웹 환경에서 한 페이지에 보여줄 아이템 수입니다.
 * @param {number} mobileItemPerPage - 모바일 환경에서 한 페이지에 보여줄 아이템 수입니다.
 * @param {{ mobile: number, web: number }} columns - 모바일 및 웹에서의 그리드 열 수를 정의합니다.
 * @param {GapStyles} gapStyle - 그리드 아이템 간의 간격 스타일을 선택합니다.
 *    - 'gapStyle1': BEST PICK, 토마토들 추천활동, 토마토 Pick에 사용됩니다.
 *    - 'gapStyle2': 대외활동, 공모전에 사용됩니다.
 *    - 'gapStyle3': 토마토 Tip에 사용됩니다.
 *
 * @returns {JSX.Element} 페이징 처리된 그리드와 페이지네이션 컨트롤을 포함한 JSX 요소를 반환합니다.
 *
 * @throws {Error} 현재 페이지가 1보다 작거나, 총 페이지 수를 초과할 경우 404 페이지로 리디렉션됩니다.
 */

export default function Pagination<T>({
  contents,
  GridItem,
  webItemPerPage,
  mobileItemPerPage,
  columnStyle,
  gapStyle,
}: PaginationProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const itemsPerPage = useResponsiveItemsPerPage(
    webItemPerPage,
    mobileItemPerPage
  );

  const totalItems = contents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const currentItems = contents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        items={currentItems}
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
