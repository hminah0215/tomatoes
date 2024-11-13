'use client';

import TabItem from '@/components/common/TabItem';
import { searchFilters, sortSearchOptions } from '@/constants/consts';

interface SearchHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
}

export default function SearchHeader({
  activeTab,
  setActiveTab,
  activeSort,
  setActiveSort,
}: SearchHeaderProps) {
  const tabs = Object.keys(searchFilters) as Array<keyof typeof searchFilters>;

  return (
    <>
      {/* PC */}
      <section className="hidden px-[88px] pt-[74px] md:block">
        <h1 className="pb-7 font-recipe text-[32px] font-medium">검색</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <ul className="flex gap-20 whitespace-nowrap text-base">
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </ul>
        </section>

        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortSearchOptions.map((option, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-[26px] font-medium md:text-xl ${
                  activeSort === option
                    ? 'font-semibold text-point-red-500'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100 before:content-[""]' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 반응형 */}
      <section className="px-[28px] pt-[37px] md:hidden">
        <h1 className="pb-7 font-recipe text-[24px] font-medium">검색</h1>

        <section className="flex justify-between border-b-[1px] pl-[14px]">
          <ul className="flex items-center justify-between gap-10 whitespace-nowrap text-[18px]">
            {tabs.map((tab, index) => (
              <TabItem
                key={index}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </ul>
        </section>

        <div className="mt-7 flex items-center justify-between">
          <ul className="flex gap-4 md:gap-12">
            {sortSearchOptions.map((option, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-[14px] font-medium md:text-xl ${
                  activeSort === option
                    ? 'font-semibold text-point-red-500'
                    : 'text-sub-gray-200'
                } ${index !== 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-[20px] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-sub-gray-100 before:content-[""]' : ''}`}
                onClick={() => {
                  console.log('Sort option clicked:', option);
                  setActiveSort(option);
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
