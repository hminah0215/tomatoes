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
    <div className="flex flex-col items-center justify-center min-h-screen">
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
          className="absolute top-[-35px] right-[-40px]"
        />
      </div>
      <p className="text-sub-gray-500 text-2xl font-semibold mb-[14px]">
        인터넷 연결을 확인하세요.
      </p>
      <p className="text-center text-sub-gray-500 text-base font-normal mb-[40px]">
        서버와의 통신이 원활하지 않아 데이터를 불러올 수 없습니다.
      </p>
      <button
        className="w-[168px] h-[46px] px-4 py-2 bg-point-red-500 rounded-md text-white text-xl font-medium"
        onClick={onReloadHandler}
      >
        다시 시도
      </button>
    </div>
  );
}
