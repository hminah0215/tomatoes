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
      <div className="gird-cols-1 mx-auto my-[120px] grid w-full max-w-[1264px] gap-4 rounded-md md:grid-cols-3">
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
      <div>
        <p>왜 토마토인가요?</p>
        <p>멋쟁이 토마토 동요를 보면 꿈을 꾸는 우리는 모두 토마토입니다.</p>
        <div className="gird-cols-1 mx-auto my-[120px] grid w-full max-w-[1264px] gap-4 rounded-md md:grid-cols-3">
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
      </div>
      <div>
        <div>
          {/* <Image src="" width={0} height={0} /> */}
          <p>에서 무엇을 얻을 수 있나요?</p>
          <p>
            토마토들에서는 대외활동 운영 경험이 많은 멘토들이 엄선한 활동을 추천
            받을 수 있고
          </p>
          <p>
            각 활동을 우수하게 마친 선배들이 작성한 꿀팁을 통해 알차게
            대외활동을 진행할 수 있습니다.
          </p>
          <Image
            src="/assets/intro/PC_grid_t (3).svg"
            alt="Tomato Grid"
            width={375}
            height={168}
            className="md:h-[568px] md:w-[411px]"
          />
          <div>
            <p>
              언젠가 멋쟁이 토마토가 될 여러분이 대학생활을 알차게 보낼 수
              있도록 응원합니다.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="gird-cols-1 mx-auto my-[120px] grid w-full max-w-[1264px] gap-4 rounded-md md:grid-rows-3">
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
      </div>
    </>
  );
}
