import Image from 'next/image';

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 모바일 버전 이미지 */}
      <div className="mb-[212px] ml-[64px] mr-[71px] mt-[89px] block md:hidden">
        <Image
          src="/assets/magazine/MO_gallary_tomato.svg"
          alt="토마토 갤러리"
          width={240}
          height={280}
        />
      </div>

      {/* PC 버전 이미지 */}
      <div className="mx-auto mb-[202px] mt-[100px] hidden md:block">
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
