'use client';

// 매거진 제목 및 메뉴
// 매거진 해더 모바일 반응형 아직 안돼요!!
import MagazineSearchBar from '@/components/common/MagazineSearchBar';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// 메뉴 이름 타입 정의
type MenuName = '토마토Pick' | '토마토Tip' | '수상작갤러리' | '토마토리포트';

const MagazineHeader = () => {
  // 현재 선택된 메뉴를 상태로 관리
  const [selectedMenu, setSelectedMenu] = useState<MenuName>('토마토Pick');

  // 메뉴 참조 정의
  const menuRefs: Record<
    MenuName,
    React.MutableRefObject<HTMLDivElement | null>
  > = {
    토마토Pick: useRef<HTMLDivElement | null>(null),
    토마토Tip: useRef<HTMLDivElement | null>(null),
    수상작갤러리: useRef<HTMLDivElement | null>(null),
    토마토리포트: useRef<HTMLDivElement | null>(null),
  };

  const [linePosition, setLinePosition] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  useEffect(() => {
    const menuRef = menuRefs[selectedMenu]?.current;
    if (menuRef) {
      const { offsetLeft, offsetWidth } = menuRef;
      console.log(
        `Selected Menu: ${selectedMenu}, offsetLeft: ${offsetLeft}, offsetWidth: ${offsetWidth}`
      );

      const offsetAdjustment =
        {
          토마토Pick: 0,
          토마토Tip: 87, // 모바일 토마토Tip의 너비
          수상작갤러리: 165, // 모바일 수상작 갤러리의 너비
          토마토리포트: 263, // 모바일 토마토리포트의 너비
        }[selectedMenu] || 0;

      setLinePosition({
        left: offsetLeft - offsetAdjustment,
        width: offsetWidth,
      });
    }
  }, [selectedMenu]);

  return (
    <div className="w-full max-w-[1264px] mx-auto py-4 relative">
      {/* 모바일 레이아웃 */}
      <div className="block md:hidden w-full">
        {/* 상단 바 */}
        <div className="w-[375px] h-12 px-7 py-[9px] bg-white flex justify-between items-center">
          <div className="w-[72px] h-[30px] text-[#222222] text-2xl font-normal font-['Recipekorea'] leading-9">
            매거진
          </div>
          {/* 기존의 매거진 서치바 컴포넌트 사용 */}
          <MagazineSearchBar placeholder="매거진을 찾아보세요." />
        </div>

        {/* 메뉴 슬라이드 컨테이너 */}
        <div className="relative w-full">
          <div
            className="flex items-center gap-10 transition-transform duration-300"
            style={{
              transform: `translateX(${
                {
                  토마토Pick: '0',
                  토마토Tip: '-87px',
                  수상작갤러리: '-165px',
                  토마토리포트: '-263px',
                }[selectedMenu]
              })`,
            }}
          >
            <div
              className={`w-[87px] h-[27px] text-lg font-semibold leading-[27px] ${selectedMenu === '토마토Pick' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토Pick')}
              ref={menuRefs['토마토Pick']}
            >
              토마토 Pick
            </div>
            <div
              className={`w-[78px] h-[27px] text-lg font-medium leading-[27px] ${selectedMenu === '토마토Tip' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토Tip')}
              ref={menuRefs['토마토Tip']}
            >
              토마토 Tip
            </div>
            <div
              className={`w-[98px] h-[27px] text-lg font-medium leading-[27px] ${selectedMenu === '수상작갤러리' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('수상작갤러리')}
              ref={menuRefs['수상작갤러리']}
            >
              수상작 갤러리
            </div>
            <div
              className={`w-[98px] h-[27px] text-lg font-medium leading-[27px] ${selectedMenu === '토마토리포트' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토리포트')}
              ref={menuRefs['토마토리포트']}
            >
              토마토리포트
            </div>
          </div>

          {/* 회색 줄 추가 */}
          <div className="w-full border border-sub-gray-100 mt-2"></div>

          {/* 검은 줄 추가 */}
          <div
            className="absolute h-[2px] bg-black top-[35px] transition-all duration-300 ease-in-out"
            style={{
              left: `${linePosition.left}px`, // offsetLeft 값을 사용
              width: `${linePosition.width}px`, // offsetWidth 값을 사용
            }}
          ></div>
        </div>
      </div>

      {/* PC 레이아웃 */}
      <div className="hidden md:block">
        <div className="h-[60px] text-black text-[32px] font-normal font-['Recipekorea'] mb-[18px] mt-[75px]  ">
          매거진
        </div>

        <div className="relative mt-2 w-full">
          {/* 회색 선 */}
          <div className="absolute w-full h-[2px] bg-sub-gray-100 top-[54px]"></div>

          <div className="flex justify-start items-start gap-[77px] relative z-10">
            {/* 토마토 Pick 메뉴 */}
            <Link href="/magazine">
              <div
                className={`w-[114px] h-[53px] text-center text-[24px] ${selectedMenu === '토마토Pick' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Pick' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토Pick')}
              >
                토마토Pick
              </div>
            </Link>

            {/* 토마토Tip 메뉴 */}
            <Link href="/magazine/tomatoTip">
              <div
                className={`w-[104px] h-[53px] text-[24px] ${selectedMenu === '토마토Tip' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Tip' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토Tip')}
              >
                토마토Tip
              </div>
            </Link>

            {/* 수상작 갤러리 메뉴 */}
            <Link href="/magazine/magazineGallary">
              <div
                className={`w-[140px] h-[53px] text-[24px] ${selectedMenu === '수상작갤러리' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '수상작갤러리' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('수상작갤러리')}
              >
                수상작 갤러리
              </div>
            </Link>

            {/* 토마토리포트 메뉴 */}
            <Link href="/magazine/magazineReport">
              <div
                className={`w-[140px] h-[53px] text-[24px] ${selectedMenu === '토마토리포트' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토리포트' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토리포트')}
              >
                토마토리포트
              </div>
            </Link>
          </div>

          {/* 선택된 메뉴에 검정색 줄 추가 */}
          <div
            className={`absolute h-[2px] bg-black ${
              selectedMenu === '토마토Pick'
                ? 'left-0 w-[114px] top-[54px]'
                : selectedMenu === '토마토Tip'
                  ? 'left-[191px] w-[104px] top-[54px]'
                  : selectedMenu === '수상작갤러리'
                    ? 'left-[372px] w-[140px] top-[54px]'
                    : selectedMenu === '토마토리포트'
                      ? 'left-[589px] w-[140px] top-[54px]'
                      : 'hidden'
            }`}
          ></div>

          {/* 메거진 검색바 컴포넌트 추가 */}
          <div className="absolute right-0 top-0 flex items-center pr-5 mr-[9px] mb-[10px] ">
            <MagazineSearchBar placeholder="필요한 글을 검색해서 찾아보세요." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineHeader;
