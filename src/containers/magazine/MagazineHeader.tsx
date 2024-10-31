'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type MenuName = '토마토Pick' | '토마토Tip' | '수상작갤러리' | '토마토리포트';

const MagazineHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuName>('토마토Pick');

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
          토마토Tip: 87, 
          수상작갤러리: 165, 
          토마토리포트: 263, 
        }[selectedMenu] || 0;

      setLinePosition({
        left: offsetLeft - offsetAdjustment,
        width: offsetWidth,
      });
    }
  }, [selectedMenu]);

  return (
    <div className="relative mx-auto w-full md:px-[88px] md:pt-[75px]">
      <div className="block w-full md:hidden">
        <div className="mb-[20px] ml-[28px] mt-[37px] h-[30px] font-['Recipekorea'] text-[24px] font-medium text-sub-gray-500">
          매거진
        </div>

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
              className={`h-[27px] w-[87px] text-lg font-semibold leading-[27px] ${selectedMenu === '토마토Pick' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토Pick')}
              ref={menuRefs['토마토Pick']}
            >
              토마토 Pick
            </div>
            <div
              className={`h-[27px] w-[78px] text-lg font-medium leading-[27px] ${selectedMenu === '토마토Tip' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토Tip')}
              ref={menuRefs['토마토Tip']}
            >
              토마토 Tip
            </div>
            <div
              className={`h-[27px] w-[98px] text-lg font-medium leading-[27px] ${selectedMenu === '수상작갤러리' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('수상작갤러리')}
              ref={menuRefs['수상작갤러리']}
            >
              수상작 갤러리
            </div>
            <div
              className={`h-[27px] w-[98px] text-lg font-medium leading-[27px] ${selectedMenu === '토마토리포트' ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
              onClick={() => setSelectedMenu('토마토리포트')}
              ref={menuRefs['토마토리포트']}
            >
              토마토리포트
            </div>
          </div>

          <div className="mt-2 w-full border border-sub-gray-100"></div>

          <div
            className="absolute top-[35px] h-[2px] bg-black transition-all duration-300 ease-in-out"
            style={{
              left: `${linePosition.left}px`, 
              width: `${linePosition.width}px`, 
            }}
          ></div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="h-[42px] font-['Recipekorea'] text-[24px] font-medium text-black md:text-[32px]">
          매거진
        </div>

        <div className="relative mt-[18px] w-full">
          <div className="absolute top-[54px] h-[2px] w-full bg-sub-gray-100"></div>

          <div className="relative z-10 flex items-start justify-start gap-[77px]">
            <Link href="/magazine">
              <div
                className={`h-[53px] w-[114px] text-center text-[24px] ${selectedMenu === '토마토Pick' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Pick' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토Pick')}
              >
                토마토Pick
              </div>
            </Link>

            <Link href="/magazine/tomatoTip">
              <div
                className={`h-[53px] w-[104px] text-[24px] ${selectedMenu === '토마토Tip' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토Tip' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토Tip')}
              >
                토마토Tip
              </div>
            </Link>

            <Link href="/magazine/magazineGallary">
              <div
                className={`h-[53px] w-[140px] text-[24px] ${selectedMenu === '수상작갤러리' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '수상작갤러리' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('수상작갤러리')}
              >
                수상작 갤러리
              </div>
            </Link>

            <Link href="/magazine/magazineReport">
              <div
                className={`h-[53px] w-[140px] text-[24px] ${selectedMenu === '토마토리포트' ? 'font-semibold leading-[39px]' : 'font-medium'} text-${selectedMenu === '토마토리포트' ? 'sub-gray-dark' : 'sub-gray-200'}`}
                onClick={() => setSelectedMenu('토마토리포트')}
              >
                토마토리포트
              </div>
            </Link>
          </div>

          <div
            className={`absolute h-[2px] bg-black ${
              selectedMenu === '토마토Pick'
                ? 'left-0 top-[54px] w-[114px]'
                : selectedMenu === '토마토Tip'
                  ? 'left-[191px] top-[54px] w-[104px]'
                  : selectedMenu === '수상작갤러리'
                    ? 'left-[372px] top-[54px] w-[140px]'
                    : selectedMenu === '토마토리포트'
                      ? 'left-[589px] top-[54px] w-[140px]'
                      : 'hidden'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MagazineHeader;
