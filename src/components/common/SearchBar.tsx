'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const [keyword, setKeyword] = useState('');

  const onKeywordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeywordSearchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.length < 1) {
      alert('검색어를 입력해주세요');
      return;
    }
    alert('나는 토마토야');
  };

  return (
    <>
      <form onSubmit={onKeywordSearchHandler}>
        {/* 토마토 이미지 */}
        <div className="flex justify-center items-center w-[264px] h-10 px-2 py-1.5 rounded-[100px] border-2 border-searchBorder gap-[11px]">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/common/PC_search_t.svg"
              alt="Tomato Icon"
              width={29}
              height={27.31}
            />
          </div>
          {/* 검색창 */}
          <div className="flex-grow flex items-center">
            <input
              type="text"
              value={keyword}
              onChange={onKeywordChangeHandler}
              placeholder={placeholder}
              className="w-full pr-2 text-sub-gray-400 text-sm bg-transparent outline-none"
              autoFocus
            />
            {/* 버튼 */}
            <button type="submit">
              <FaSearch className="text-point-red-500 text-2xl" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
