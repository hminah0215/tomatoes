// CategoryHeader.tsx
'use client';

import TabMenu from './TabMenu';
import FilterPanel from './FilterPanel';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  activityFilters,
  contestFilters,
  sortOptions,
} from '@/constants/consts';

export default function CategoryHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // 페이지 제목과 탭 설정
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

  const filters = (() => {
    if (/^\/activity/.test(pathname)) return activityFilters;
    if (/^\/contest/.test(pathname)) return contestFilters;
    return null;
  })();

  // URL에서 상태 초기화
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState(
    searchParams.get('sort') || '관련도순'
  );

  // URL 파라미터로부터 초기 상태 설정
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    const filtersFromUrl = searchParams
      .get('filters')
      ?.split(',')
      .filter(Boolean);
    const sortFromUrl = searchParams.get('sort');

    if (tabFromUrl) setActiveTab(tabFromUrl);
    if (filtersFromUrl) setSelectedFilters(filtersFromUrl);
    if (sortFromUrl) setActiveSort(sortFromUrl);
  }, []);

  // URL 업데이트 함수
  const updateURL = (newTab: string, newFilters: string[], newSort: string) => {
    const params = new URLSearchParams();

    if (newTab) params.set('tab', newTab);
    if (newFilters.length > 0) params.set('filters', newFilters.join(','));
    if (newSort) params.set('sort', newSort);

    router.push(`${pathname}?${params.toString()}`);
  };

  // 이벤트 핸들러
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    updateURL(tabName, [], activeSort);
  };

  const handleFilterChange = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newFilters);
    updateURL(activeTab, newFilters, activeSort);
  };

  const handleSortChange = (sortOption: string) => {
    setActiveSort(sortOption);
    updateURL(activeTab, selectedFilters, sortOption);
  };

  const resetFiltersAndSort = () => {
    setActiveSort('관련도순');
    setSelectedFilters([]);
    updateURL(activeTab, [], '관련도순');
  };

  return (
    <header className="mb-6 pt-9 md:mb-14 md:pt-[74px]">
      <h1 className="pb-7 pl-7 font-recipe text-2xl font-medium md:pl-[88px] md:text-[32px]">
        {pageTitle}
      </h1>
      <TabMenu tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

      {filters && (
        <FilterPanel
          filters={filters[activeTab as keyof typeof filters] || []}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          sortOptions={sortOptions}
          activeSort={activeSort}
          onSortChange={handleSortChange}
          onReset={resetFiltersAndSort}
        />
      )}
    </header>
  );
}
