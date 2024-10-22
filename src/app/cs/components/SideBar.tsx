import { Dispatch, SetStateAction } from 'react';

interface SideBarProps {
  activeContent: string;
  setActiveContent: Dispatch<SetStateAction<string>>;
}

export default function SideBar({
  activeContent,
  setActiveContent,
}: SideBarProps) {
  return (
    <div className="space-y-6 mr-[64px] ml-[84px] mt-[104px]">
      {/* 제목 */}
      <div className="text-sub-gray-500 text-[32px] font-normal font-recipe">
        공고등록/문의
      </div>

      {/* 구분선 */}
      <div className="w-[200px] h-[3px] bg-sub-gray-500 rounded-full mb-[24px]" />

      {/* 리스트 */}
      <div className="space-y-[32px] w-[187px] h-[323px]">
        <div
          className={`text-2xl font-semibold cursor-pointer ${
            activeContent === 'tomato-report'
              ? 'text-point-red-500'
              : 'text-sub-gray-200'
          }`}
          onClick={() => setActiveContent('tomato-report')}
        >
          토마토 리포트
        </div>

        <div
          className={`text-2xl font-semibold cursor-pointer ${
            activeContent === 'business-intro'
              ? 'text-point-red-500'
              : 'text-sub-gray-200'
          }`}
          onClick={() => setActiveContent('business-intro')}
        >
          사업소개
        </div>

        <div
          className={`text-2xl font-semibold cursor-pointer ${
            activeContent === 'ad-inquiry'
              ? 'text-point-red-500'
              : 'text-sub-gray-200'
          }`}
          onClick={() => setActiveContent('ad-inquiry')}
        >
          광고/제휴 문의
        </div>

        <div
          className={`text-2xl font-semibold cursor-pointer ${
            activeContent === 'terms'
              ? 'text-point-red-500'
              : 'text-sub-gray-200'
          }`}
          onClick={() => setActiveContent('terms')}
        >
          이용약관
        </div>

        <div
          className={`text-2xl font-semibold cursor-pointer ${
            activeContent === 'legal-notice'
              ? 'text-point-red-500'
              : 'text-sub-gray-200'
          }`}
          onClick={() => setActiveContent('legal-notice')}
        >
          책임한계와법적고지
        </div>
      </div>
    </div>
  );
}
