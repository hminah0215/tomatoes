'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { SearchBarProps } from '@/types/search';

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); // 모바일에서 확장 상태 관리

  const onKeywordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeywordSearchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim().length === 0) {
      alert('검색어를 입력해 주세요🍅'); // 검색어가 비어 있을 때 경고 메시지 표시
      return;
    }
    onSearch(keyword);
  };

  // 모바일 검색창 토글
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <form onSubmit={onKeywordSearchHandler} className="ml-6 flex items-center">
      {/* PC 버전 - md 이상에서 전체 검색창 표시 */}
      <div className="ml-6 hidden h-10 max-w-[264px] items-center justify-center gap-[11px] rounded-[100px] border-2 border-point-red-500 px-2 py-1.5 md:flex">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/common/PC_search_t.svg"
            alt="Tomato Icon"
            width={29}
            height={27.31}
          />
        </div>
        <div className="flex flex-grow items-center">
          <input
            type="text"
            value={keyword}
            onChange={onKeywordChangeHandler}
            placeholder={placeholder}
            className="w-full bg-transparent pr-2 text-sm text-sub-gray-400 outline-none"
            autoFocus
          />
          <button type="submit">
            <FaSearch className="text-2xl text-point-red-500" />
          </button>
        </div>
      </div>
      {/* 모바일 버전 - md 이하에서 아이콘으로 표시, 클릭 시 확장 */}
      <div
        className={`relative ${
          isExpanded ? 'w-full max-w-[170px]' : 'w-auto'
        } flex h-10 items-center gap-2 rounded-full border-2 border-point-red-500 transition-all duration-300 md:hidden`}
      >
        <div className="mx-2 flex flex-shrink-0 items-center">
          {/* 토마토 아이콘 */}
          <Image
            src="/assets/common/MO_search_t.svg"
            alt="Tomato Icon"
            width={24}
            height={24}
            className="mr-2"
          />

          {/* 검색 아이콘 (확장/축소 버튼) - 확장되지 않았을 때만 보임 */}
          {!isExpanded && (
            <button
              type="button"
              onClick={toggleExpand}
              className="ml-2 flex items-center justify-center"
            >
              <FaSearch className="text-lg text-point-red-500" />
            </button>
          )}
        </div>

        {/* 확장 상태일 때만 input과 검색 버튼 표시 */}
        {isExpanded && (
          <>
            {/* 검색어 입력 필드 */}
            <input
              type="text"
              value={keyword}
              onChange={onKeywordChangeHandler}
              placeholder={isExpanded ? '검색' : ''}
              className="flex-grow bg-transparent pr-10 text-sm text-sub-gray-400 outline-none sm:text-xs"
              autoFocus
            />
            {/* 검색 버튼 (absolute로 배치) */}
            <button
              type="submit"
              className="absolute right-3 flex items-center justify-center"
            >
              <FaSearch className="text-lg text-point-red-500" />
            </button>
          </>
        )}
      </div>
    </form>
  );
}
