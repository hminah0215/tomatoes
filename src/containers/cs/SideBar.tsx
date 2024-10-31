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
    <div>
      <div className="h-[48px] w-[154px] font-recipe text-2xl font-normal text-sub-gray-500 md:w-[204px] md:text-[32px]">
        공고등록/문의
      </div>

      <div className="mb-6 mt-4 h-px w-[318px] rounded-full bg-sub-gray-300 md:mb-[64px] md:mt-[24px] md:block md:h-[3px] md:w-[200px] md:bg-sub-gray-500" />

      <div className="hidden h-[323px] w-[187px] space-y-[32px] md:block">
        {menuItems.map((item) => {
          const isActive = activeContent === item.key;
          return (
            <div
              key={item.key}
              className={`cursor-pointer text-2xl font-semibold ${isActive ? 'text-point-red-500' : 'text-sub-gray-200'}`}
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
