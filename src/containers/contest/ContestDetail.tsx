'use client';

import Image from 'next/image';
import Dday from '@/components/common/Dday';
import ActivityContestDetailTab from '@/components/common/ActivityContestDetailTab';
import ActivityContestDescription from '@/components/common/ActivityContestDescription';
import { formatDate, dateToFormatDate } from '@/utils/format';
import { useState } from 'react';

export default function ContestDetail({
  thumbnail_url,
  title,
  registration_date,
  view_count,
  start_date,
  end_date,
  company,
  homepage_url,
  d_day,
  description,
  department,
  target,
}: ActivityContestDetail) {
  const [activeTab, setActiveTab] = useState('상세내용');
  const today_date = new Date();
  const [formatted_today_date, formatted_start_date, formatted_end_date] = [
    dateToFormatDate(today_date),
    formatDate(start_date),
    formatDate(end_date),
  ];

  const details = [
    { label: '공모 분야', value: department },
    {
      label: '공모 기간',
      value: `${formatted_start_date} ~ ${formatted_end_date}`,
    },
    { label: '주최 기관', value: company },
    { label: '참여 대상', value: target },
    {
      label: '홈페이지',
      value: (
        <a
          href={homepage_url}
          className="text-[14px] font-semibold text-sub-gray-500 underline md:text-[24px]"
        >
          캠퍼스픽
        </a>
      ),
    },
  ];

  const ThumbnailImage = ({
    url,
    title,
    isMobile,
  }: {
    url: string;
    title: string;
    isMobile: boolean;
  }) => (
    <div
      className={`relative flex-1 overflow-hidden ${
        isMobile ? 'sm:hidden' : 'hidden sm:block'
      }`}
      style={{
        width: isMobile ? 318 : 495,
        height: isMobile ? 449 : 698,
      }}
    >
      <Image
        src={url}
        alt={title}
        width={isMobile ? 318 : 495}
        height={isMobile ? 449 : 698}
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="px-7 md:px-[90px]">
      <div className="flex flex-col items-center justify-around gap-[43px] md:flex-row md:gap-[106px]">
        <ThumbnailImage url={thumbnail_url} title={title} isMobile={true} />
        <ThumbnailImage url={thumbnail_url} title={title} isMobile={false} />

        <div className="flex-1">
          {formatted_start_date > formatted_today_date ? (
            <Dday type="upcoming" />
          ) : formatted_end_date < formatted_today_date ? (
            <Dday type="completed" />
          ) : (
            <Dday
              type="active"
              day={d_day}
              color={d_day <= 7 ? 'red' : d_day <= 31 ? 'yellow' : 'green'}
            />
          )}
          <h2 className="mb-2 mt-3 break-all text-2xl font-bold leading-normal text-sub-gray-500 md:text-5xl">
            {title}
          </h2>
          <div className="mb-8 flex gap-2 md:mb-14 md:gap-4">
            <span className="text-sm font-medium text-sub-gray-300 md:text-xl">
              등록일: {registration_date}
            </span>
            <span className="relative mx-2 text-sub-gray-300 after:absolute after:left-0 after:top-1/2 after:h-4 after:w-[1px] after:-translate-y-1/2 after:bg-sub-gray-300" />
            <span className="text-sm font-medium text-sub-gray-300 md:text-xl">
              조회 {view_count}회
            </span>
          </div>
          <div className="flex flex-col justify-center">
            {details.map(({ label, value }, index) => (
              <div
                key={label}
                className={`flex gap-[30px] border-sub-gray-100 py-5 md:gap-[50px] ${
                  index === details.length - 1
                    ? 'border-y-[1px]'
                    : 'border-t-[1px]'
                }`}
              >
                <span className="text-[16px] font-semibold text-sub-gray-500 md:text-[24px]">
                  {label}:
                </span>
                <span className="text-[14px] font-normal text-sub-gray-500 md:text-[24px]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ActivityContestDetailTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === '상세내용' && (
        <ActivityContestDescription description={description} />
      )}
      {activeTab === '토마토 TIP' && <div />}
      {activeTab === '수상작 갤러리' && <div />}
    </section>
  );
}
