'use client';

// 매거진 제목 및 메뉴

import MagazineSearchBar from '@/components/common/MagazineSearchBar';
import { useState } from 'react';

const MagazineHeader = () => {
  // 현재 선택된 메뉴를 상태로 관리
  const [selectedMenu, setSelectedMenu] = useState('토마토Pick');

  return (
    <div className="w-[1264px] mx-auto py-4 relative">
      {/* 매거진 제목 */}
      <div className="text-black text-[32px] font-normal font-['Recipekorea'] mb-[18px] ml-[5px]">
        매거진
      </div>

      <div className="relative mt-2">
        <div className="absolute w-full h-[2px] bg-sub-gray-100 top-[54px]"></div>

        <div className="flex justify-start items-start gap-[77px] relative z-10">
          {/* 원래 각 메뉴 폰트 크기는 26px로 적혀있는데 그러면 이상해... 뭐야 ...  */}
          <div
            className={`w-[114px] h-[53px] text-center text-[24px] ${selectedMenu === '토마토Pick' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Pick' ? 'sub-gray-dark' : 'sub-gray-200'}`}
            onClick={() => setSelectedMenu('토마토Pick')}
          >
            토마토Pick
          </div>
          <div
            className={`w-[104px] h-[53px] text-[24px] ${selectedMenu === '토마토Tip' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Tip' ? 'sub-gray-dark' : 'sub-gray-200'}`}
            onClick={() => setSelectedMenu('토마토Tip')}
          >
            토마토Tip
          </div>
          <div
            className={`w-[140px] h-[53px] text-[24px] ${selectedMenu === '수상작 갤러리' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '수상작 갤러리' ? 'sub-gray-dark' : 'sub-gray-200'}`}
            onClick={() => setSelectedMenu('수상작 갤러리')}
          >
            수상작 갤러리
          </div>
          <div
            className={`w-[140px] h-[53px] text-[24px] ${selectedMenu === '토마토리포트' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토리포트' ? 'sub-gray-dark' : 'sub-gray-200'}`}
            onClick={() => setSelectedMenu('토마토리포트')}
          >
            토마토리포트
          </div>
        </div>

        {/* 선택된 메뉴에 검정색 줄 추가 */}
        {/* 
        gap-77px 이니까 
        토마토Tip: left-[114px + 77px] = left-[191px]
        수상작 갤러리: left-[191px + 104px + 77px] = left-[372px]
        토마토리포트: left-[372px + 140px + 77px] = left-[589px]
        */}
        <div
          className={`absolute h-[2px] bg-black ${
            selectedMenu === '토마토Pick'
              ? 'left-0 w-[114px] top-[54px]'
              : selectedMenu === '토마토Tip'
                ? 'left-[191px] w-[104px] top-[54px]'
                : selectedMenu === '수상작 갤러리'
                  ? 'left-[372px] w-[140px] top-[54px]'
                  : selectedMenu === '토마토리포트'
                    ? 'left-[589px] w-[140px] top-[54px]'
                    : 'hidden'
          }`}
        ></div>

        {/* 메거진 검색바 컴포넌트 추가 */}
        <div className="absolute right-0 top-0 flex items-center pr-5">
          <MagazineSearchBar />
        </div>
      </div>
    </div>
  );
};

export default MagazineHeader;
