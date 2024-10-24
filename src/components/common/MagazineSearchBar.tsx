'use client';

import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, FormEvent, useState } from 'react';

// props 타입 정의
interface MagazineSearchBarProps {
  placeholder: string; // placeholder의 타입을 string으로 정의
}

const MagazineSearchBar = ({ placeholder }: MagazineSearchBarProps) => {
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
    alert('검색어: ' + keyword);
  };

  return (
    <form
      onSubmit={onKeywordSearchHandler}
      className="flex h-[30px] w-[172px] items-center rounded-[100px] border-2 border-point-red-500 px-2.5 py-2 md:h-[50px] md:w-[308px]"
    >
      <input
        type="text"
        value={keyword}
        onChange={onKeywordChangeHandler}
        placeholder={placeholder}
        className={`flex-grow bg-transparent text-xs text-point-red-500 outline-none md:text-base pl-${placeholder === '매거진을 찾아보세요.' ? '12' : '20'} pt-${placeholder === '매거진을 찾아보세요.' ? '6' : '13'} pb-${placeholder === '매거진을 찾아보세요.' ? '6' : '13'}`}
        style={{ width: '100%', height: '100%' }}
      />
      <button type="submit" className="flex items-center justify-center">
        <FaSearch className="h-[16px] w-[16px] text-point-red-500 md:h-[23.56px] md:w-[23.56px]" />
      </button>
    </form>
  );
};

export default MagazineSearchBar;
