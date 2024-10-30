'use client';

import FilterItem from './FilterItem';
import SortPanel from './SortPanel';

interface FilterPanelProps {
  filters: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
  sortOptions: string[]; // SortPanel 관련 props
  activeSort: string;
  onSortChange: (sortOption: string) => void;
  onReset: () => void;
}

export default function FilterPanel({
  filters,
  selectedFilters,
  onFilterChange,
  sortOptions,
  activeSort,
  onSortChange,
  onReset,
}: FilterPanelProps) {
  return (
    <section className="mx-5 mt-7 flex flex-col gap-4 border-b-[1px] border-sub-gray-100 pb-7 md:mx-[88px]">
      {/* 필터 아이템들 */}
      <div className="flex flex-wrap gap-[6px] md:gap-4">
        {filters.length > 0 ? (
          filters.map((filter, index) => (
            <FilterItem
              key={index}
              filterType={filter}
              isSelected={selectedFilters.includes(filter)}
              onClick={() => onFilterChange(filter)}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>

      {/* SortPanel 추가 */}
      <SortPanel
        sortOptions={sortOptions}
        activeSort={activeSort}
        onSortChange={onSortChange}
        onReset={onReset}
      />
    </section>
  );
}
