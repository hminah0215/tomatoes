import Image from 'next/image';

export default function AdInquiry() {
  return (
    <>
      <div>
        <div className="mt-[88px] h-[72px] text-5xl font-bold text-sub-gray-500">
          책임한계와 법적고지
        </div>

        <div className="mb-[40px] mt-4 h-[1px] w-[999px] bg-sub-gray-200" />

        <div className="relative flex h-[295px] w-[319px] items-center justify-center rounded-[20px] p-4 md:h-[295px] md:w-[999px] md:p-8">
          <Image
            src="/assets/magazine/PC_report_tomato.svg"
            alt="토마토 리포트"
            width={168}
            height={271}
          />
        </div>
      </div>
    </>
  );
}
