'use client';
import Image from 'next/image';

export default function NetworkError() {
  const onReloadHandler = () => {
    if (navigator.onLine) {
      window.location.reload();
    } else {
      alert('인터넷 연결을 확인해 주세요');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative mb-[30.51px]">
        {/* 토마토 이미지 */}
        <Image
          src="/assets/common/PC_net_err_t.svg"
          alt="Tomato Icon"
          width={92}
          height={90.49}
        />
        {/* 와이파이 이미지 */}
        <Image
          src="/assets/common/PC_net_err_wifi.svg"
          alt="Wifi Icon"
          width={42.5}
          height={32.5}
          className="absolute right-[-40px] top-[-35px]"
        />
      </div>
      <p className="mb-[14px] text-2xl font-semibold text-sub-gray-500">
        인터넷 연결을 확인하세요.
      </p>
      <p className="mb-[40px] text-center text-base font-normal text-sub-gray-500">
        서버와의 통신이 원활하지 않아 데이터를 불러올 수 없습니다.
      </p>
      <button
        className="h-[46px] w-[168px] rounded-md bg-point-red-500 px-4 py-2 text-xl font-medium text-white"
        onClick={onReloadHandler}
      >
        다시 시도
      </button>
    </div>
  );
}
