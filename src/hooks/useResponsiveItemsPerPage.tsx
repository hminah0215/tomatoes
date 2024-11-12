// 웹과 모바일에서 페이지 당 아이템 개수를 동일하게 유지하도록 했기 때문에 이 훅은 삭제 예정입니다

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
