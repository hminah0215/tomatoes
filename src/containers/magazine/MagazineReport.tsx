'use client';

import MReportCoustomAlert from './MReportCoustomAlert';
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
      <div className="mx-[636px] my-[100px] mb-[161px] hidden h-[271px] w-[168px] md:block">
        <Image
          src="/assets/magazine/PC_report_tomato.svg"
          alt="토마토 리포트"
          width={168}
          height={271}
        />
      </div>

      {/* 모바일 버전 이미지 */}
      <div className="mx-[104px] my-[100px] mb-[225px] block h-[271px] w-[168px] md:hidden">
        <Image
          src="/assets/magazine/MO_report_tomato.svg"
          alt="토마토 리포트"
          width={168}
          height={271}
        />
      </div>

      {/* 알럿 창 */}
      {isAlertOpen && (
        <div className="fixed left-1/2 top-1/2 z-50 flex items-center justify-center">
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
