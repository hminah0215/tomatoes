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
        <div className="flex h-10 w-[264px] items-center justify-center gap-[11px] rounded-[100px] border-2 border-point-red-500 px-2 py-1.5">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/common/PC_search_t.svg"
              alt="Tomato Icon"
              width={29}
              height={27.31}
            />
          </div>
          {/* 검색창 */}
          <div className="flex flex-grow items-center">
            <input
              type="text"
              value={keyword}
              onChange={onKeywordChangeHandler}
              placeholder={placeholder}
              className="w-full bg-transparent pr-2 text-sm text-sub-gray-400 outline-none"
              autoFocus
            />
            {/* 버튼 */}
            <button type="submit">
              <FaSearch className="text-2xl text-point-red-500" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
