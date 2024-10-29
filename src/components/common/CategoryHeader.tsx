'use client';

import TabMenu from './TabMenu';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function CategoryHeader() {
  const pathname = usePathname();

  // 라우트에 따라 페이지 제목과 탭 설정
  const pageTitle = (() => {
    if (/^\/magazine/.test(pathname)) return '매거진';
    if (/^\/activity/.test(pathname)) return '대외활동';
    if (/^\/contest/.test(pathname)) return '공모전';
    return '';
  })();

  const tabs = (() => {
    if (/^\/magazine/.test(pathname))
      return [
        { name: '토마토Pick', path: '/magazine' },
        { name: '토마토Tip', path: '/magazine/tomatoTip' },
        { name: '수상작갤러리', path: '/magazine/magazineGallery' },
        { name: '토마토리포트', path: '/magazine/magazineReport' },
      ];
    if (/^\/activity/.test(pathname))
      return [
        { name: '분야', path: null },
        { name: '활동', path: null },
        { name: '주최', path: null },
        { name: '활동기간', path: null },
        { name: '지역', path: null },
      ];
    if (/^\/contest/.test(pathname))
      return [
        { name: '학과', path: null },
        { name: '시상규모', path: null },
        { name: '수상혜택', path: null },
        { name: '응모대상', path: null },
        { name: '주최기관', path: null },
      ];
    return [];
  })();

  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <header className="mb-6 pt-9 md:mb-14 md:pt-[74px]">
      <h1 className="pb-7 pl-7 font-recipe text-2xl font-medium md:pl-[88px] md:text-[32px]">
        {pageTitle}
      </h1>
      <TabMenu tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
    </header>
  );
}
