'use client';

import { useState } from 'react';
import Image from 'next/image';
import FilterItem from './FilterItem';
import CategoryHeader from '@/components/common/CategoryHeader';
import { categoryFilters, sortOptions } from '@/constants/consts';

export default function CategoryPanel() {
  const tabs = Object.keys(categoryFilters) as Array<
    keyof typeof categoryFilters
  >;
  const [activeTab, setActiveTab] =
    useState<keyof typeof categoryFilters>('분야');
  const [activeSort, setActiveSort] = useState('관련도순');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleTabClick = (tab: keyof typeof categoryFilters) => {
    setActiveTab(tab);
    setSelectedFilters([]);
  };

  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const resetFiltersAndSort = () => {
    setActiveTab('분야');
    setActiveSort('관련도순');
    setSelectedFilters([]);
  };

  const filters = categoryFilters[activeTab];

  return (
    <>
      {/* 웹 컴포넌트 */}
      <section className="hidden md:block">
        <CategoryHeader
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        {/* 필터 패널 */}
        <section className="mt-7 flex flex-wrap gap-4 border-b-[1px] border-sub-gray-100 pb-7">
          {filters.length > 0 ? (
            filters.map((filter, index) => (
              <FilterItem
                key={index}
                filterType={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))
          ) : (
            <div>해당 카테고리는 필터가 없습니다.</div>
          )}
        </section>

        {/* 정렬 패널 */}
        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortOptions.map((option, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-sm font-medium md:text-xl ${
                  activeSort === option
                    ? 'font-semibold text-point-red-500'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100' : ''}`}
                onClick={() => setActiveSort(option)}
              >
                {option}
              </li>
            ))}
          </ul>

          <button
            onClick={resetFiltersAndSort}
            className="flex items-center text-sm font-medium text-sub-gray-300 md:text-xl"
          >
            초기화
            <Image
              src="/assets/common/PC_reset.svg"
              alt="reset icon"
              className="ml-2 hidden md:block"
              width={16.93}
              height={17.5}
            />
          </button>
        </div>
      </section>

      {/* 모바일 컴포넌트 */}
      <section className="mt-9 md:hidden">
        <div className="flex justify-between pb-6">
          <h1 className="px-7 font-recipe text-2xl font-medium">대외활동</h1>
        </div>

        <section className="flex justify-between overflow-x-auto border-b-[1px] pl-7">
          {/* 모바일 탭 메뉴 */}
          <ul className="flex gap-8 whitespace-nowrap text-base">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeTab === tab ? 'font-bold text-black' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </section>

        {/* 필터 패널 */}
        <section className="mt-7 flex flex-wrap gap-4 border-b-[1px] border-sub-gray-100 pb-7">
          {filters.length > 0 ? (
            filters.map((filter, index) => (
              <FilterItem
                key={index}
                filterType={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))
          ) : (
            <div>해당 카테고리는 필터가 없습니다.</div>
          )}
        </section>
      </section>
    </>
  );
}
