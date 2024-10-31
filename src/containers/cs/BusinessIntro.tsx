import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

export default function BusinessIntro() {
  return (
    <>
      <div>
        <div className="mb-4 h-[48px] text-[32px] font-semibold text-sub-gray-500 md:mt-[88px] md:h-[72px] md:text-5xl md:font-bold">
          사업소개
        </div>

        <div className="mb-[40px] mt-4 hidden h-[1px] w-[999px] bg-sub-gray-200 md:block" />

        <div className="relative flex h-[161px] w-[319px] items-center justify-between rounded-[20px] bg-point-red-100 p-4 md:h-[295px] md:w-[999px] md:p-8">
          <div>
            <Image
              src="/assets/common/MO_logo_text.svg"
              alt="토마토들"
              width={112}
              height={25}
              className="md:h-[60px] md:w-[267px]"
            />

            <div className="mb-[18px] mt-[7px] w-[118px] text-[16px] font-bold text-sub-gray-500 md:mb-[44px] md:mt-4 md:w-[390px] md:text-[32px]">
              멋쟁이 토마토가 될 당신을 위해
            </div>

            <button className="flex h-8 w-[159px] items-center justify-center gap-2.5 rounded-[100px] border-2 border-point-red-500 bg-transparent focus:outline-none md:h-16 md:w-[318px]">
              <span className="text-[16px] font-semibold text-point-red-500 md:text-[32px]">
                회사소개서 다운로드
              </span>
            </button>
          </div>

          <div className="absolute right-[13px] top-[16px] md:right-[44px] md:top-9">
            <Image
              src="/assets/cs/PC_business_t.svg"
              alt="Tomato Character"
              width={123}
              height={82}
              className="md:h-[172px] md:w-[262px]"
            />
          </div>
        </div>

        <div className="container w-[1000px]">
          <section className="mb-[30px] mt-[48px] flex flex-col md:mb-[80px] md:mt-[72px] md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="mb-4 text-[24px] font-semibold text-sub-gray-500 md:mb-2 md:text-[32px]">
                디자인산업{' '}
                <span className="inline text-point-red-500 md:block">
                  육성 지원사업
                </span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="leading-[27px] text-sub-gray-500">
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

          <section className="mb-[30px] flex flex-col md:mb-[80px] md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="mb-4 text-[24px] font-semibold text-sub-gray-500 md:mb-2 md:text-[32px]">
                디자인<span className="text-point-red-500">포럼</span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="leading-[27px] text-sub-gray-500">
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
              <h2 className="mb-4 text-[24px] font-semibold text-red-500 md:mb-2 md:text-[32px]">
                시민참여<span className="text-sub-gray-500">문화행사</span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="leading-[27px] text-sub-gray-500">
                서울디자인재단은 DDP에서 체험하고 경험할 수 있는 시민참여의
                공간을 조성하여 다양한 프로그램을 기획하고 운영합니다. DDP
                스토어에서는 한국의 디자인상품을 보실 수 있으며, DDP행사지를
                통해 DDP의 주요 행사 및 다양한 정보를 접하실 수 있습니다.
              </p>
            </div>
          </section>

          <div className="mb-[32px] mt-[30px] h-[1px] w-[320px] bg-sub-gray-200 md:mb-[80px] md:mt-[90px] md:w-[999px]" />

          <section className="mb-[80px] flex flex-col md:flex-row">
            <div className="mb-4 flex w-full items-center md:mb-2 md:w-1/3">
              <Image
                src="/assets/homePage/PC_recommendationMark_t.svg"
                alt="Mark"
                width={45}
                height={45}
                className="relative md:-top-[20px]"
                style={{ transform: 'rotate(20deg)' }}
              />
              <h2 className="ml-[7px] text-[24px] font-semibold text-sub-gray-500 md:text-[32px]">
                디자인산업{' '}
                <span className="inline md:block">
                  <span className="text-point-red-500">경쟁력</span> 강화
                </span>
              </h2>
            </div>
            <div className="w-[320px] md:w-2/3">
              <p className="leading-[27px] text-sub-gray-500">
                서울디자인재단은 서울의 디자인산업 경쟁력을 강화하기 위해 다양한
                사업을 실행하고 있습니다.
              </p>
              <br />
              <p className="leading-[27px] text-sub-gray-500">
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

          <div className="mb-[80px] mt-[80px] flex md:mb-[92px] md:mt-[92px] md:justify-center">
            <button className="flex h-[72px] w-[313px] items-center justify-center gap-2 rounded-full bg-point-red-500 px-8 py-3 focus:outline-none">
              <span className="text-[24px] font-semibold text-white md:text-[32px]">
                광고/제휴 문의
              </span>
              <AiOutlineRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <Image
            src="assets/cs/PC_business_banner_t.svg"
            alt="Tomato Banner"
            width={319}
            height={359}
            className="mb-[40px] md:mb-[120px] md:h-[547px] md:w-[1003px]"
          />
        </div>
      </div>
    </>
  );
}
