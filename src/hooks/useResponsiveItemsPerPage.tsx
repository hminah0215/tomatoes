import { useState, useEffect } from 'react';

export default function useResponsiveItemsPerPage(
  webItemsPerPage: number,
  mobileItemsPerPage: number
) {
  const [itemsPerPage, setItemsPerPage] = useState(webItemsPerPage);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setItemsPerPage(webItemsPerPage); 
      } else {
        setItemsPerPage(mobileItemsPerPage);
      }
    }

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [webItemsPerPage, mobileItemsPerPage]);

  return itemsPerPage;
}
