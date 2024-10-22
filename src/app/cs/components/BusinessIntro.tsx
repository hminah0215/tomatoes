import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

export default function BusinessIntro() {
  return (
    <>
      <div>
        {/* 상단 타이틀 */}
        <div className="text-sub-gray-500 h-[48px] font-semibold text-[32px] mb-4 md:h-[72px] md:font-bold md:text-5xl md:mt-[88px]">
          사업소개
        </div>

        {/* 구분선 */}
        <div className="hidden w-[999px] h-[1px] bg-sub-gray-200 mt-4 mb-[40px] md:block" />

        {/* 회사소개 배너 섹션 */}
        <div className="relative bg-point-red-100 rounded-[20px] flex items-center justify-between w-[319px] h-[161px] p-4 md:p-8 md:w-[999px] md:h-[295px]">
          {/* 텍스트 섹션 */}
          <div>
            <Image
              src="/assets/common/MO_logo_text.svg" // '토마토들.' 이미지 경로
              alt="토마토들"
              width={112}
              height={25}
              className="md:w-[267px] md:h-[60px]"
            />

            <div className="w-[118px] mt-[7px] mb-[18px] md:w-[390px] md:mt-4 md:mb-[44px] text-sub-gray-500 font-bold text-[16px] md:text-[32px]">
              멋쟁이 토마토가 될 당신을 위해
            </div>

            {/* 다운로드 버튼 */}
            <button className="w-[159px] h-8 md:w-[318px] md:h-16 bg-transparent rounded-[100px] border-2 border-point-red-500 flex justify-center items-center gap-2.5 focus:outline-none">
              <span className="text-point-red-500 font-semibold text-[16px] md:text-[32px]">
                회사소개서 다운로드
              </span>
            </button>
          </div>

          {/* 토마토 이미지 */}
          <div className="absolute right-[13px] top-[16px] md:right-[44px] md:top-9">
            <Image
              src="/assets/cs/PC_business_t.svg" // 오른쪽에 있는 토마토 캐릭터들 이미지 경로
              alt="Tomato Character"
              width={123}
              height={82}
              className="md:w-[262px] md:h-[172px]"
            />
          </div>
        </div>

        {/* 본문 텍스트 */}
        <div className="container w-[1000px]">
          <section className="mt-[48px] mb-[30px] flex flex-col md:flex-row md:mt-[72px] md:mb-[80px]">
            <div className="w-full md:w-1/3">
              <h2 className="text-sub-gray-500 text-[24px] font-semibold mb-4 md:text-[32px] md:mb-2">
                디자인산업{' '}
                <span className="inline md:block text-point-red-500">
                  육성 지원사업
                </span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="text-sub-gray-500 leading-[27px]">
                서울시와 서울디자인재단은 중소기업의 경쟁력 강화를 목표로 두고
                서울의 디자인산업 생태계 조성에 실질적으로 도움이 되는 정책을
                펼치며 발전하려고 추진하고 있습니다. 디자인의 완성을 위한 초기
                디자인의 지원부터 중소기업의 디자인 역량강화를 돕는 제품 기획 ·
                디자인 개발, 마케팅·판로개척에 이르기까지 중소기업과
                디자인전문기업이 상생하는 협업을 통해 중소기업의 제품 및
                서비스를 개선하여 서울의 글로벌 경쟁력 강화를 목표하고자 합니다.
              </p>
            </div>
          </section>

          <section className="mb-[30px] flex flex-col md:flex-row md:mb-[80px]">
            <div className="w-full md:w-1/3">
              <h2 className="text-sub-gray-500 text-[24px] font-semibold mb-4 md:text-[32px] md:mb-2">
                디자인<span className="text-point-red-500">포럼</span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="text-sub-gray-500 leading-[27px]">
                DDP포럼은 다양한 주제의 디자인 지식을 교류하는 위한 장학적
                포럼입니다. 국내 최정상 디자이너·전문가와 함께 디자인 산업의
                미래 비전을 제시하고, 일반 시민들이 디자인 지식 문화 확산에
                기여하는 프로그램입니다. 코로나 이후 DDP특별활동을 통해
                온라인으로 개최되고 있습니다.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="text-red-500 text-[24px] font-semibold mb-4 md:text-[32px] md:mb-2">
                시민참여<span className="text-sub-gray-500">문화행사</span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="text-sub-gray-500 leading-[27px]">
                서울디자인재단은 DDP에서 체험하고 경험할 수 있는 시민참여의
                공간을 조성하여 다양한 프로그램을 기획하고 운영합니다. DDP
                스토어에서는 한국의 디자인상품을 보실 수 있으며, DDP행사지를
                통해 DDP의 주요 행사 및 다양한 정보를 접하실 수 있습니다.
              </p>
            </div>
          </section>

          {/* 구분선 */}
          <div className="w-[320px] md:w-[999px] h-[1px] bg-sub-gray-200 mt-[30px] mb-[32px] md:mt-[90px] md:mb-[80px]" />

          <section className="mb-[80px] flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="text-sub-gray-500 text-[24px] font-semibold mb-4 md:text-[32px] md:mb-2">
                디자인산업{' '}
                <span className="inline md:block text-point-red-500">
                  경쟁력
                </span>{' '}
                강화
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="text-sub-gray-500 leading-[27px]">
                서울디자인재단은 서울의 디자인산업 경쟁력을 강화하기 위해 다양한
                사업을 실행하고 있습니다.
              </p>
              <br />
              <p className="text-sub-gray-500 leading-[27px]">
                디자이너 및 디자인 기업들의 비즈니스 역량을 강화하고, 디자인
                인재를 발굴하며, 취업 창업을 지원하고 있습니다. 디자인행사
                개최와 전문가 콜라보레이션 사업연계를 통해 다양한 비즈니스
                기회를 제공하고, 우수한 디자인공예상품이 디자인 자산으로
                자리하도록 공모선정·신제품개발·유통판매·홍보마케팅 등 서울디자인
                브랜드 순환체계를 구축하여 디자인 산업 생태계를 지원하고
                있습니다.
              </p>
            </div>
          </section>

          {/* 광고/제휴 문의 버튼 */}
          <div className="flex md:justify-center mt-[80px] mb-[80px] md:mt-[92px] md:mb-[92px]">
            <button className="w-[313px] h-[72px] px-8 py-3 bg-point-red-500 rounded-full flex justify-center items-center gap-2 focus:outline-none">
              <span className="text-white font-semibold text-[24px] md:text-[32px]">
                광고/제휴 문의
              </span>
              <AiOutlineRight className="text-white w-6 h-6" />
            </button>
          </div>

          <Image
            src="assets/cs/PC_business_banner_t.svg"
            alt="Tomato Banner"
            width={319}
            height={359}
            className="mb-[40px] md:w-[1003px] md:h-[547px] md:mb-[120px]"
          />
        </div>
      </div>
    </>
  );
}
