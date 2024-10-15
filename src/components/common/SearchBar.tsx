'use client';

import { ChangeEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    alert('나는 토마토야');
  };

  return (
    <>
      {/* 토마토 아이콘 */}
      <div className="w-[264px] h-10 px-2 py-1.5 rounded-[100px] border-2 border-[#e24444] flex justify-start items-center gap-[11px]">
        <div className="w-[29px] h-[27.31px] flex justify-center items-center">
          <Image
            src="/assets/common/PC_search_t.svg"
            alt="Tomato Icon"
            width={27.31}
            height={29}
            className="origin-top-left"
          />
        </div>
        {/* 검색 입력창 */}
        <div className="flex-grow flex justify-between items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="나는야 춤을 출거야"
            className="text-[#4e4e4e] text-sm font-normal leading-[21px] bg-transparent outline-none"
            style={{ fontFamily: 'Pretendard' }}
          />
          {/* 검색 버튼 */}
          <button
            onClick={handleSearch}
            className="w-6 h-6 flex justify-center items-center"
          >
            <FaSearch size={24} color="#FF6347" />
          </button>
        </div>
      </div>
    </>
  );
}
