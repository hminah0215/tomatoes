import Link from 'next/link';

export default function SideBar() {
  return (
    <>
      <div className="flex">
        {/* 사이드바 */}
        <div className="space-y-6 mr-[64px] ml-[84px] mt-[104px]">
          {/* 공고등록/문의 타이틀 */}
          <div className="text-sub-gray-500 text-[32px] font-normal font-recipe">
            공고등록/문의
          </div>

          {/* 아래에 들어가는 바 */}
          <div className="w-[200px] h-[3px] bg-sub-gray-500 rounded-full mb-[24px]" />

          {/* 메뉴 리스트 */}
          <div className="space-y-[32px]">
            {/* 토마토 리포트 */}
            <div className="text-sub-gray-200 text-2xl font-semibold">
              <Link href="/cs/tomato-report">토마토 리포트</Link>
            </div>

            {/* 사업소개 */}
            <div className="text-point-red-500 text-2xl font-semibold">
              <Link href="/cs/business-intro">사업소개</Link>
            </div>

            {/* 광고/제휴 문의 */}
            <div className="text-sub-gray-200 text-2xl font-semibold mt-[64px]">
              <Link href="/cs/ad-inquiry">광고/제휴 문의</Link>
            </div>

            {/* 이용약관 */}
            <div className="text-sub-gray-200 text-2xl font-semibold">
              <Link href="/cs/terms">이용약관</Link>
            </div>

            {/* 책임한계와 법적고지 */}
            <div className="text-sub-gray-200 text-2xl font-semibold">
              <Link href="/cs/legal-notice">책임한계와 법적고지</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
