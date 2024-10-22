import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface SideBarProps {
  activeContent: string;
  setActiveContent: Dispatch<SetStateAction<string>>;
}

export default function SideBar({
  activeContent,
  setActiveContent,
}: SideBarProps) {
  const menuItems = [
    { key: 'tomato-report', label: '토마토 리포트' },
    { key: 'business-intro', label: '사업소개' },
    { key: 'ad-inquiry', label: '광고/제휴 문의' },
    { key: 'terms', label: '이용약관' },
    { key: 'legal-notice', label: '책임한계와법적고지' },
  ];

  return (
    <div className="space-y-6 mr-[64px] ml-[84px] mt-[104px]">
      {/* 제목 */}
      <div className="text-sub-gray-500 text-[32px] font-normal font-recipe">
        공고등록/문의
      </div>

      {/* 구분선 */}
      <div className="w-[200px] h-[3px] bg-sub-gray-500 rounded-full mb-[24px]" />

      {/* 메뉴 */}
      <div className="space-y-[32px] w-[187px] h-[323px]">
        {menuItems.map((item) => {
          const isActive = activeContent === item.key;
          return (
            <div
              key={item.key}
              className={`text-2xl font-semibold cursor-pointer ${isActive ? 'text-point-red-500' : 'text-sub-gray-200'}`}
              onClick={() => setActiveContent(item.key)}
            >
              {isActive && (
                <Image
                  src="/assets/cs/PC_sidebar_t.svg"
                  alt="Tomato Icon"
                  width={42}
                  height={15}
                />
              )}
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
