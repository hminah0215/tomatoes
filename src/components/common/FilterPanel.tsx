'use client';

import FilterItem from './FilterItem';
import SortPanel from './SortPanel';

interface FilterPanelProps {
  filters: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
  sortOptions: string[];
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
      {filters.length > 0 && (
        <div className="flex flex-wrap gap-[6px] md:gap-4">
          {filters.map((filter, index) => (
            <FilterItem
              key={index}
              filterType={filter}
              isSelected={selectedFilters.includes(filter)}
              onClick={() => onFilterChange(filter)}
            />
          ))}
        </div>
      )}

      <SortPanel
        sortOptions={sortOptions}
        activeSort={activeSort}
        onSortChange={onSortChange}
        onReset={onReset}
      />
    </section>
  );
}
