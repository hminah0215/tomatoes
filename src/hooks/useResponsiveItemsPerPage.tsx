import { useState, useEffect } from 'react';

export default function useResponsiveItemsPerPage(
  webItemsPerPage: number, // 웹에서의 아이템 수
  mobileItemsPerPage: number // 모바일에서의 아이템 수
) {
  const [itemsPerPage, setItemsPerPage] = useState(webItemsPerPage);

  // 화면 크기에 따라 아이템 수 변경
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setItemsPerPage(webItemsPerPage); // 웹에서는 웹 아이템 수
      } else {
        setItemsPerPage(mobileItemsPerPage); // 모바일에서는 모바일 아이템 수
      }
    }

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [webItemsPerPage, mobileItemsPerPage]);

  return itemsPerPage; // 현재 화면 크기에 맞는 itemsPerPage 반환
}
