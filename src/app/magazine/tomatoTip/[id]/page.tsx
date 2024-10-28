'use client';

import { useParams } from 'next/navigation';
import TomatoTipDetail from '@/containers/magazine/TomatoTipDetail';
import Image from 'next/image';

export default function Page() {
  const params = useParams();
  const id = params.id;

  // useParams 훅을 사용하면 id의 타입이 string | string[]으로 반환될 수 있음
  // typeof로 id가 string 타입인지 확인해서 안전하게 처리
  // id가 문자열일 때만 숫자로 변환
  if (!id || typeof id !== 'string') return <p>Loading...</p>;

  return (
    <div className="relative">
      {/* 배너 이미지 */}
      <div className="mt-[67px] w-screen overflow-hidden">
        <Image
          src="/assets/magazine/PC_mzDetail_banner.svg"
          alt="배너 이미지"
          width={1442}
          height={518}
          className="hidden w-full object-cover md:block"
        />
        <Image
          src="/assets/magazine/MO_mzDetail_banner.svg"
          alt="모바일 배너 이미지"
          width={375}
          height={200}
          className="block w-full object-cover md:hidden"
        />
      </div>

      {/* 화면의 왼쪽 끝에 고정된 배경 이미지 */}
      <div className="fixed bottom-[41.14px] left-0 z-[-1] h-[598.86px] w-[489px] opacity-80">
        <Image
          src="/assets/magazine/PC_mzDetail_left.svg"
          alt="왼쪽 배경 이미지"
          width={212}
          height={599}
          className="pointer-events-none"
        />
      </div>

      {/* 콘텐츠 영역 */}
      <TomatoTipDetail id={parseInt(id, 10)} />

      {/* 하단 고정 회색줄 */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-sub-gray-100"></div>
    </div>
  );
}
