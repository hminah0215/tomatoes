'use client';

import TabItem from './TabItem';
import FilterItem from './FilterItem';
import { useState } from 'react';
import Image from 'next/image';
import { contestFilters, sortOptions } from '@/constants/consts';

export default function CategoryPanel() {
  const tabs = Object.keys(contestFilters) as Array<
    keyof typeof contestFilters
  >; // 카테고리 탭
  const [activeTab, setActiveTab] =
    useState<keyof typeof contestFilters>('학과'); // 초기 탭 설정
  const [activeSort, setActiveSort] = useState('관련도순');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터 목록

  const handleTabClick = (tab: keyof typeof contestFilters) => {
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
    setActiveTab('학과'); // 탭 초기화
    setActiveSort('관련도순'); // 정렬 초기화
    setSelectedFilters([]); // 필터 초기화
  };

  const filters = contestFilters[activeTab]; // 선택된 탭에 맞는 필터 가져오기

  return (
    <>
      {/* 웹 컴포넌트 */}
      <section className="mb-14 hidden px-[88px] pt-[74px] md:block">
        <h1 className="pb-7 font-recipe text-[32px] font-medium">공모전</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <nav>
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
        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortOptions.map((option, index) => (
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

          <button
            onClick={resetFiltersAndSort} // 상태 초기화
            className="flex items-center text-sm font-medium text-sub-gray-300 md:text-xl"
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

      {/* 모바일 컴포넌트 */}
      <section className="md:hidden">
        <h1 className="pb-7 font-recipe text-[32px] font-medium">공모전</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <nav>
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
        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortOptions.map((option, index) => (
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

          <button
            onClick={resetFiltersAndSort} // 상태 초기화
            className="flex items-center text-sm font-medium text-sub-gray-300 md:text-xl"
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
