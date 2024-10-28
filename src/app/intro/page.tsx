import Image from 'next/image';

export default function IntroPage() {
  return (
    <>
      <Image
        src="/assets/intro/PC_banner (1).svg"
        alt="Tomato Banner"
        width={375}
        height={294}
        className="md:h-[586px] md:w-[1440px]"
      />
      <div className="mx-auto my-[120px] grid w-full max-w-[1264px] grid-cols-1 gap-4 rounded-md md:grid-cols-3">
        <Image
          src="/assets/intro/PC_grid_t (1).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:h-[568px] md:w-[411px]"
        />
        <Image
          src="/assets/intro/PC_grid_t (2).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:h-[568px] md:w-[411px]"
        />
        <Image
          src="/assets/intro/PC_grid_t (3).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:h-[568px] md:w-[411px]"
        />
      </div>
      <Image
        src="/assets/intro/PC_banner (2).svg"
        alt="Tomato Banner"
        width={1440}
        height={586}
      />
      <div className="flex flex-col items-center justify-center bg-[#f7f7f7]">
        <p className="mt-[137px] text-[48px] font-bold">
          왜{' '}
          <span className="inline-block">
            <Image
              src="/assets/intro/PC_letter_t.svg"
              alt="Tomato letter"
              width={117}
              height={37}
            />
          </span>
          인가요?
        </p>
        <p className="text-center text-[24px] font-normal text-sub-gray-400">
          멋쟁이 토마토 동요를 보면
          <br /> 꿈을 꾸는 우리는 모두 토마토입니다.
        </p>
        <div className="mx-auto mb-[120px] mt-[67px] grid w-full max-w-[1264px] grid-cols-1 gap-4 rounded-md md:grid-cols-3">
          <Image
            src="/assets/intro/PC_grid_t (4).svg"
            alt="Tomato Grid"
            width={375}
            height={332}
            className="md:h-[568px] md:w-[411px]"
          />
          <Image
            src="/assets/intro/PC_grid_t (5).svg"
            alt="Tomato Grid"
            width={375}
            height={332}
            className="md:h-[568px] md:w-[411px]"
          />
          <Image
            src="/assets/intro/PC_grid_t (6).svg"
            alt="Tomato Grid"
            width={375}
            height={332}
            className="md:h-[568px] md:w-[411px]"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center bg-main-white">
          <p className="mt-[120px] text-[48px] font-bold">
            <span className="inline-block">
              <Image
                src="/assets/common/MO_logo_text.svg"
                alt="Tomato letter"
                width={186}
                height={42}
              />
            </span>
            에서 무엇을 얻을 수 있나요?
          </p>
          <p className="mb-[68px] mt-[24px] text-center text-[24px] font-normal text-sub-gray-400">
            토마토들에서는 대외활동 운영 경험이 많은 멘토들이 엄선한 활동을 추천
            받을 수 있고
            <br /> 각 활동을 우수하게 마친 선배들이 작성한 꿀팁을 통해 알차게
            대외활동을 진행할 수 있습니다.
          </p>
          <Image
            src="/assets/intro/PC_triple_t.svg"
            alt="Triple Tomato"
            width={319}
            height={126}
            className="mb-[60px] md:h-[258px] md:w-[735px]"
          />
          <div className="relative mb-[140px] h-[68px] w-[937px] rounded-lg bg-main-beige px-[24px] py-[16px] text-center text-[24px] font-semibold text-[#4E4E4E]">
            <p>
              언젠가 멋쟁이 토마토가 될 여러분이 대학생활을 알차게 보낼 수
              있도록{' '}
              <span className="inline-block">
                <Image
                  src="/assets/common/MO_logo_text.svg"
                  alt="Tomato letter"
                  width={87}
                  height={20}
                />
              </span>
              이 함께합니다!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f7f7f7]">
        <div className="mx-auto my-[83px] grid max-w-[1264px] grid-cols-1 gap-4 rounded-md md:grid-rows-3">
          <Image
            src="/assets/intro/PC_grid_t (7).svg"
            alt="Tomato Grid"
            width={317}
            height={365}
            className="md:h-[231px] md:w-[1050px]"
          />
          <Image
            src="/assets/intro/PC_grid_t (8).svg"
            alt="Tomato Grid"
            width={317}
            height={365}
            className="md:h-[231px] md:w-[1050px]"
          />
          <Image
            src="/assets/intro/PC_grid_t (9).svg"
            alt="Tomato Grid"
            width={317}
            height={365}
            className="md:h-[231px] md:w-[1050px]"
          />
        </div>
      </div>
    </>
  );
}
