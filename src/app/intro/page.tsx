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
    </>
  );
}
