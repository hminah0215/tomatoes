'use client';

import TabItem from './TabItem';
import FilterItem from './FilterItem';
import { useState } from 'react';
import Image from 'next/image';
import { categoryFilters, sortOptions } from '@/constants/consts';
import SearchBar from '@/components/common/SearchBar';

export default function CategoryPanel() {
  const tabs = Object.keys(categoryFilters) as Array<
    keyof typeof categoryFilters
  >; // 카테고리 탭
  const [activeTab, setActiveTab] =
    useState<keyof typeof categoryFilters>('분야'); // 초기 탭 설정
  const [activeSort, setActiveSort] = useState('관련도순');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터 목록

  const handleTabClick = (tab: keyof typeof categoryFilters) => {
    console.log('Tab clicked:', tab);
    setActiveTab(tab); // 선택된 탭 설정
    setSelectedFilters([]); // 탭을 변경하면 필터를 초기화
  };

  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      // 이미 선택된 필터라면 제거
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      // 선택되지 않은 필터라면 추가
      setSelectedFilters([...selectedFilters, filter]);
    }
    console.log(
      'Filter clicked:',
      filter,
      'Current selected filters:',
      selectedFilters
    );
  };

  const resetFiltersAndSort = () => {
    console.log('Reset filters and sort');
    setActiveTab('분야'); // 탭 초기화
    setActiveSort('관련도순'); // 정렬 초기화
    setSelectedFilters([]); // 필터 초기화
  };

  const filters = categoryFilters[activeTab]; // 선택된 탭에 맞는 필터 가져오기

  return (
    <>
      {/* 웹 컴포넌트 */}
      <section className="hidden md:block px-[88px] pt-[74px] mb-14">
        <h1 className="font-recipe font-medium text-[32px] pb-7">대외활동</h1>

        <section className="flex justify-between pl-[14px] border-b-[1px]">
          <nav>
            <ul className="flex gap-20 text-base whitespace-nowrap">
              {tabs.map((tab, index) => (
                <TabItem
                  key={index}
                  tab={tab}
                  isActive={activeTab === tab}
                  onClick={() => handleTabClick(tab)} // 탭 클릭 시 동작
                />
              ))}
            </ul>
          </nav>
          <SearchBar placeholder="공모전을 찾아보세요" />
        </section>

        {/* 필터 패널 */}
        <section className="mt-7 flex flex-wrap gap-4 border-b-[1px] border-sub-gray-100 pb-7">
          {filters.length > 0 ? (
            filters.map((filter, index) => (
              <FilterItem
                key={index}
                filterType={filter}
                isSelected={selectedFilters.includes(filter)} // 필터가 선택되었는지 확인
                onClick={() => handleFilterClick(filter)} // 필터 클릭 시 동작
              />
            ))
          ) : (
            <div>해당 카테고리는 필터가 없습니다.</div>
          )}
        </section>

        {/* 정렬 패널 */}
        <div className="flex justify-between items-center mt-7">
          <ul className="flex gap-4 md:gap-12">
            {sortOptions.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer relative text-sm md:text-xl font-medium ${
                  activeSort === option
                    ? 'text-point-red-500 font-semibold'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:content-[""] before:absolute before:w-[1px] before:h-[20px] before:-left-6 before:bg-sub-gray-100 before:top-1/2 before:transform before:-translate-y-1/2' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option); // 정렬 클릭 시 동작
                }}
              >
                {option}
              </li>
            ))}
          </ul>

          <button
            onClick={resetFiltersAndSort} // 상태 초기화
            className="text-sub-gray-300 flex items-center font-medium text-sm md:text-xl"
          >
            초기화
            <Image
              src="/assets/common/MO_reset.svg"
              alt="reset icon"
              className="ml-2 block md:hidden"
              width={9.67}
              height={10}
            />
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

      {/* 모바일 컴포넌트 md 기준 */}
      <section className="md:hidden mt-9">
        <div className="flex justify-between pb-6">
          <h1 className="font-recipe font-medium text-2xl px-7">대외활동</h1>
          <SearchBar placeholder="공모전을 찾아보세요" />
        </div>

        <section className="flex justify-between border-b-[1px] pl-7 overflow-x-auto">
          <nav>
            <ul className="flex gap-8 text-base whitespace-nowrap">
              {tabs.map((tab, index) => (
                <TabItem
                  key={index}
                  tab={tab}
                  isActive={activeTab === tab}
                  onClick={() => handleTabClick(tab)} // 탭 클릭 시 동작
                />
              ))}
            </ul>
          </nav>
        </section>

        {/* 필터 패널 */}
        <section className="mt-7 flex flex-wrap gap-4 border-b-[1px] border-sub-gray-100 pb-7">
          {filters.length > 0 ? (
            filters.map((filter, index) => (
              <FilterItem
                key={index}
                filterType={filter}
                isSelected={selectedFilters.includes(filter)} // 필터가 선택되었는지 확인
                onClick={() => handleFilterClick(filter)} // 필터 클릭 시 동작
              />
            ))
          ) : (
            <div>해당 카테고리는 필터가 없습니다.</div>
          )}
        </section>

        {/* 정렬 패널 */}
        <div className="flex justify-between items-center mt-7 px-7">
          <ul className="flex gap-4 md:gap-12">
            {sortOptions.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer relative text-sm md:text-xl font-medium ${
                  activeSort === option
                    ? 'text-point-red-500 font-semibold'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:content-[""] before:absolute before:w-[1px] before:h-3 before:-left-2 md:before:h-[20px] md:before:-left-6 before:bg-sub-gray-100 before:top-1/2 before:transform before:-translate-y-1/2' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option); // 정렬 클릭 시 동작
                }}
              >
                {option}
              </li>
            ))}
          </ul>

          <button
            onClick={resetFiltersAndSort} // 상태 초기화
            className="text-sub-gray-300 flex items-center font-medium text-sm md:text-xl"
          >
            초기화
            <Image
              src="/assets/common/MO_reset.svg"
              alt="reset icon"
              className="ml-2 block md:hidden"
              width={9.67}
              height={10}
            />
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
    </>
  );
}
