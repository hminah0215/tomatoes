'use client';
import { useState, useEffect } from 'react';
import GridView from '../grid/GridView';

function PaginationForHome({ contents = [] }: { contents: Activities }) {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const currentItems = contents.slice(0, itemsPerPage);

  useEffect(() => {
    function handleResize() {
      // PC - 8개, MO - 6개로 수정
      if (window.innerWidth >= 768) {
        setItemsPerPage(8); 
      } else {
        setItemsPerPage(6);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col gap-4 md:gap-6 mx-8 my-5 mb-20">
      <GridView activities={currentItems} />
    </section>
  );
}

export default PaginationForHome;
