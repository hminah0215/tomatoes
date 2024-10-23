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
      className="w-[172px] h-[30px] md:w-[308px] md:h-[50px] px-2.5 py-2 rounded-[100px] border-2 border-point-red-500 flex items-center"
    >
      <input
        type="text"
        value={keyword}
        onChange={onKeywordChangeHandler}
        placeholder={placeholder}
        className={`flex-grow text-point-red-500 bg-transparent outline-none 
                    text-xs md:text-base 
                    pl-${placeholder === '매거진을 찾아보세요.' ? '12' : '20'} 
                    pt-${placeholder === '매거진을 찾아보세요.' ? '6' : '13'} 
                    pb-${placeholder === '매거진을 찾아보세요.' ? '6' : '13'}`}
        style={{ width: '100%', height: '100%' }}
      />
      <button type="submit" className="flex justify-center items-center">
        <FaSearch className="text-point-red-500 w-[16px] h-[16px] md:w-[23.56px] md:h-[23.56px]" />
      </button>
    </form>
  );
};

export default MagazineSearchBar;
