import { TomatoTipDataType } from '@/types/tomatoTips';

interface TomatoTipDetailProps {
  tipData: TomatoTipDataType;
}

const TomatoTipDetail = ({ tipData }: TomatoTipDetailProps) => {
  return (
    <>
      <div className="relative mx-auto flex max-w-screen-md flex-col justify-center px-7 md:px-0">
        <div className="mt-[26.85px] w-full rounded-lg md:mt-[56px]">
          {tipData && (
            <>
              <h1 className="mb-[6px] text-2xl font-semibold leading-9 text-sub-gray-500 md:mb-3 md:text-5xl md:font-bold md:leading-[72px]">
                {tipData.title}
              </h1>
              <p className="mb-[18px] ml-[1px] text-sm text-sub-gray-300 md:mb-[23px] md:ml-[6px] md:text-base">
                작성자 : {tipData.author} | 작성일 :{' '}
                {tipData.created_at
                  ? new Date(tipData.created_at).toLocaleDateString()
                  : '정보 없음'}
              </p>

              <div className="relative mb-[34px] h-[2px] w-full bg-sub-gray-100 md:mb-[52px]"></div>

              <div className="space-y-4 text-sm font-normal leading-normal text-sub-gray-500 md:text-2xl md:leading-9">
                <div dangerouslySetInnerHTML={{ __html: tipData.content }} />
              </div>

              {tipData.link && (
                <div className="mt-8 text-center">
                  <a
                    href={tipData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-blue-500 hover:underline md:text-xl"
                  >
                    ▶️ 원본 글 보러가기
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TomatoTipDetail;
