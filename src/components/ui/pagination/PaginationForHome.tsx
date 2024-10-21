'use client';
import GridView from '../grid/GridView';

function PaginationForHome({ contents = [] }: { contents: Activities }) {
  // PC, MO 모두 8개로 통일
  const itemsPerPage = 8;

  // contents 리스트에서 첫 8개만 추리기
  const currentItems = contents.slice(0, itemsPerPage);

  return (
    <section className="flex flex-col gap-4 md:gap-6 mx-8 my-5 mb-20">
      <GridView activities={currentItems} />
    </section>
  );
}

export default PaginationForHome;
