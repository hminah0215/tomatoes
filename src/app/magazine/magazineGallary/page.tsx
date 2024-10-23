import Image from 'next/image';

export default function page() {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* 모바일 버전 이미지 */}
      <div className="block md:hidden ml-[64px] mr-[71px] mt-[89px] mb-[212px]">
        <Image
          src="/assets/magazine/MO_gallary_tomato.svg"
          alt="토마토 갤러리"
          width={240}
          height={280}
        />
      </div>

      {/* PC 버전 이미지 */}
      <div className="hidden md:block mx-auto mt-[100px] mb-[202px] ">
        <Image
          src="/assets/magazine/PC_gallary_tomato.svg"
          alt="토마토 갤러리"
          width={288}
          height={278}
        />
      </div>
    </div>
  );
}
