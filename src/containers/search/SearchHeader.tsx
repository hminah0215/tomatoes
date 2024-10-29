'use client';

import TabItem from '../contest/TabItem';
import { useState } from 'react';
import { searchFilters, sortSearchOptions } from '@/constants/consts';
import SearchBar from '@/components/common/SearchBar';

interface SearchHeaderProps {
  onSearch: (query: string) => void;
}

export default function SearchHeader({ onSearch }: SearchHeaderProps) {
  const tabs = Object.keys(searchFilters) as Array<keyof typeof searchFilters>;
  const [activeTab, setActiveTab] =
    useState<keyof typeof searchFilters>('전체');
  const [activeSort, setActiveSort] = useState('관련도순');

  const handleTabClick = (tab: keyof typeof searchFilters) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* 웹 컴포넌트 */}
      <section className="mb-14 hidden px-[88px] pt-[74px] md:block">
        <h1 className="pb-7 font-recipe text-[32px] font-medium">검색</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <ul className="flex gap-20 whitespace-nowrap text-base">
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => handleTabClick(tab)} // 탭 클릭 시 동작
              />
            ))}
          </ul>
        </section>

        {/* 정렬 패널 */}
        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortSearchOptions.map((option, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-sm font-medium md:text-xl ${
                  activeSort === option
                    ? 'font-semibold text-point-red-500'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100 before:content-[""]' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option); // 정렬 클릭 시 동작
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 모바일 컴포넌트 */}
      <section className="md:hidden">
        <h1 className="pb-7 font-recipe text-[32px] font-medium">공모전</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <ul className="flex gap-20 whitespace-nowrap text-base">
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => handleTabClick(tab)} // 탭 클릭 시 동작
              />
            ))}
          </ul>
        </section>

        {/* 정렬 패널 */}
        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortSearchOptions.map((option, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-sm font-medium md:text-xl ${
                  activeSort === option
                    ? 'font-semibold text-point-red-500'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100 before:content-[""]' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option); // 정렬 클릭 시 동작
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
