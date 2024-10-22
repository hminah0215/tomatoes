import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="space-y-4">
      {/* 공고등록/문의 타이틀 */}
      <div className="text-[#222222] text-[32px] font-normal font-['RecipekoreaOTF'] leading-[48px]">
        공고등록/문의
      </div>

      {/* 아래에 들어가는 바 */}
      <div className="w-[200px] h-[3px] bg-[#222222] rounded-full" />

      {/* 메뉴 리스트 */}
      <div className="w-[185px] h-[323px] relative">
        {/* 토마토 리포트 */}
        <div className="left-0 top-0 absolute text-[#a7a7a7] text-2xl font-semibold font-['Pretendard'] leading-9">
          <Link href="/cs/tomato-report">토마토 리포트</Link>
        </div>

        {/* 사업소개 */}
        <div className="w-[83px] h-[51px] left-0 top-[68px] absolute">
          <div className="left-0 top-[15px] absolute text-[#e24444] text-2xl font-semibold font-['Pretendard'] leading-9">
            <Link href="/cs/business-intro">사업소개</Link>
          </div>
          <div className="origin-top-left -rotate-90 w-[15.20px] h-[41.29px] left-0 top-[15.20px] absolute"></div>
        </div>

        {/* 광고/제휴 문의 */}
        <div className="left-0 top-[151px] absolute text-[#a7a7a7] text-2xl font-semibold font-['Pretendard'] leading-9">
          <Link href="/cs/ad-inquiry">광고/제휴 문의</Link>
        </div>

        {/* 이용약관 */}
        <div className="left-0 top-[219px] absolute text-[#a7a7a7] text-2xl font-semibold font-['Pretendard'] leading-9">
          <Link href="/cs/terms">이용약관</Link>
        </div>

        {/* 책임한계와 법적고지 */}
        <div className="left-0 top-[287px] absolute text-[#a7a7a7] text-2xl font-semibold font-['Pretendard'] leading-9">
          <Link href="/cs/legal-notice">책임한계와 법적고지</Link>
        </div>
      </div>
    </div>
  );
}
