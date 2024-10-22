import Image from 'next/image';

export default function BusinessIntro() {
  return (
    <>
      <div>
        {/* 상단 타이틀 */}
        <div className="h-[72px] text-sub-gray-500 text-5xl font-bold mt-[88px] mb-[16px]">
          사업소개
        </div>

        {/* 구분선 */}
        <div className="h-[1px] bg-sub-gray-200 mb-[40px]" />

        {/* 회사소개 배너 섹션 */}
        <div className="relative w-[999px] h-[295px] bg-point-red-100 rounded-[20px] flex items-center justify-between p-8">
          {/* 텍스트 섹션 */}
          <div>
            <Image
              src="/assets/common/MO_logo_text.svg" // '토마토들.' 이미지 경로
              alt="토마토들"
              width={267}
              height={60}
            />
            <div className="mt-4 text-sub-gray-500 text-[32px] font-bold font-['Pretendard']">
              멋쟁이 토마토가 될 당신을 위해
            </div>
            {/* 다운로드 버튼 */}
            <div className="mt-4 h-16 px-8 py-2 bg-white rounded-[100px] border-2 border-point-red-500 flex justify-center items-center gap-2.5">
              <div className="text-point-red-500 text-[24px] font-semibold font-['Pretendard'] leading-[36px]">
                회사소개서 다운로드
              </div>
            </div>
          </div>

          {/* 오른쪽 토마토 이미지 */}
          <div className="absolute right-4 bottom-4">
            <Image
              src="/assets/cs/PC_business_t.svg" // 오른쪽에 있는 토마토 캐릭터들 이미지 경로
              alt="Tomato Character"
              width={262}
              height={172}
            />
          </div>
        </div>

        {/* 본문 텍스트
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          디자인산업 <span className="text-red-500">육성 지원사업</span>
        </h2>
        <p className="text-gray-700 mb-4">
          서울시와 서울디자인재단은 중소기업의 경쟁력 강화를 목표로 두고 서울의
          디자인산업 생태계 조성에 실질적으로 도움이 되는 정책을 펼치며
          발전하려고 추진하고 있습니다. 디자인의 완성을 위한 초기 디자인의
          지원부터 중소기업의 디자인 역량강화를 돕는 제품 기획 · 디자인 개발,
          마케팅·판로개척에 이르기까지 중소기업과 디자인전문기업이 상생하는
          협업을 통해 중소기업의 제품 및 서비스를 개선하여 서울의 글로벌 경쟁력
          강화를 목표하고자 합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          디자인 <span className="text-red-500">포럼</span>
        </h2>
        <p className="text-gray-700 mb-4">
          DDP포럼은 다양한 주제의 디자인 지식을 교류하는 위한 장학적 포럼입니다.
          국내 최정상 디자이너·전문가와 함께 디자인 산업의 미래 비전을 제시하고,
          일반 시민들이 디자인 지식 문화 확산에 기여하는 프로그램입니다. 코로나
          이후 DDP특별활동을 통해 온라인으로 개최되고 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          <span className="text-red-500">시민참여</span> 문화행사
        </h2>
        <p className="text-gray-700">
          서울디자인재단은 DDP에서 체험하고 경험할 수 있는 시민참여의 공간을
          조성하여 다양한 프로그램을 기획하고 운영합니다. DDP 스토어에서는
          한국의 디자인상품을 보실 수 있으며, DDP행사지를 통해 DDP의 주요 행사
          및 다양한 정보를 접하실 수 있습니다.
        </p>
      </section> */}
      </div>
    </>
  );
}
