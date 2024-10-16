'use client';
import React from 'react';

export default function NetworkError() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* 토마토 이미지 */}
      <img
        src="/assets/common/PC_net_err_t.svg"
        alt="토마토 이미지"
        className="w-24 h-24"
      />
      {/* 와이파이 이미지 */}
      <img
        src="/assets/common/PC_net_err_wifi.svg"
        alt="와이파이 신호 이미지"
      />
      <p>인터넷 연결을 확인하세요.</p>
      <p>서버와의 통신이 원활하지 않아 데이터를 불러올 수 없습니다.</p>
      <button onClick={() => window.location.reload()}>다시 시도</button>
    </div>
  );
}
