'use client';

import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, FormEvent, useState } from 'react';

const MagazineSearchBar = () => {
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
      className="w-[308px] h-[50px] px-2.5 py-2 rounded-[100px] border-2 border-point-red-500 flex items-center"
    >
      <input
        type="text"
        value={keyword}
        onChange={onKeywordChangeHandler}
        placeholder="필요한 글을 검색해서 찾아보세요."
        className="flex-grow text-sub-gray-200 text-base font-normal leading-normal bg-transparent outline-none"
      />
      <button type="submit" className="flex justify-center items-center">
        <FaSearch className="text-point-red-500 w-[23.56px] h-[23.56px]" />
      </button>
    </form>
  );
};

export default MagazineSearchBar;
