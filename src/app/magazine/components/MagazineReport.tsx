'use client';

import MReportCoustomAlert from '@/app/magazine/components/MReportCoustomAlert';
import Image from 'next/image';
import { useState } from 'react';

const MagazineReport = () => {
  const [isAlertOpen, setAlertOpen] = useState(true);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* PC 버전 이미지 */}
      <div className="hidden md:block w-[168px] h-[271px] mx-[636px] my-[100px] mb-[161px]">
        <Image
          src="/assets/magazine/PC_report_tomato.svg"
          alt="토마토 리포트"
          width={168}
          height={271}
        />
      </div>

      {/* 모바일 버전 이미지 */}
      <div className="block md:hidden w-[168px] h-[271px] mx-[104px] my-[100px] mb-[225px]">
        <Image
          src="/assets/magazine/MO_report_tomato.svg"
          alt="토마토 리포트"
          width={168}
          height={271}
        />
      </div>

      {/* 알럿 창 */}
      {isAlertOpen && (
        <div className="fixed flex items-center justify-center z-50 mt-[360px] mb-[330px] mx-[32px] md:mt-[326px] md:mb-[326px] md:ml-[565px] md:mr-[564px]">
          <MReportCoustomAlert
            message={
              <>
                토마토리포트는 아직 준비중이에요!
                <br />
                오픈이 완료되면 알려드릴게요!
              </>
            }
            onClose={handleCloseAlert}
          />
        </div>
      )}
    </div>
  );
};

export default MagazineReport;
