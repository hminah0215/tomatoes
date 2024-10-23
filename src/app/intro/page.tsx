import Image from 'next/image';

export default function IntroPage() {
  return (
    <>
      <Image
        src="/assets/intro/PC_banner (1).svg"
        alt="Tomato Banner"
        width={1440}
        height={586}
      />
      <div className="grid grid-cols-3 rounded-md gap-4 mx-[88px] my-[120px]">
        <Image
          src="/assets/intro/PC_grid_t (1).svg"
          alt="Tomato Grid"
          width={411}
          height={568}
        />
        <Image
          src="/assets/intro/PC_grid_t (2).svg"
          alt="Tomato Grid"
          width={411}
          height={568}
        />
        <Image
          src="/assets/intro/PC_grid_t (3).svg"
          alt="Tomato Grid"
          width={411}
          height={568}
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
