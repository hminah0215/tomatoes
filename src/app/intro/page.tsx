import Image from 'next/image';

export default function IntroPage() {
  return (
    <>
      <Image
        src="/assets/intro/PC_banner (1).svg"
        alt="Tomato Banner"
        width={375}
        height={294}
        className="md:w-[1440px] md:h-[586px]"
      />
      <div className="grid gird-cols-1 md:grid-cols-3 max-w-[1264px] w-full rounded-md gap-4 mx-auto my-[120px]">
        <Image
          src="/assets/intro/PC_grid_t (1).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:w-[411px] md:h-[568px]"
        />
        <Image
          src="/assets/intro/PC_grid_t (2).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:w-[411px] md:h-[568px]"
        />
        <Image
          src="/assets/intro/PC_grid_t (3).svg"
          alt="Tomato Grid"
          width={375}
          height={168}
          className="md:w-[411px] md:h-[568px]"
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
