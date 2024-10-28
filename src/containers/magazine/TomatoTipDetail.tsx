interface Tip {
  title: string;
  author: string;
  created_at: string;
  content: string;
  link: string;
}

interface TomatoTipDetailProps {
  tipData: Tip;
}

const TomatoTipDetail = ({ tipData }: TomatoTipDetailProps) => {
  return (
    <>
      {/* 콘텐츠 영역 */}
      {/* 피그마 파일대로 하면 mx-auto가 아니라  md:ml-[302px] md:mr-[306px] 이렇게 인데....
      그렇게 하면 화면을 서서히 줄일때 md보다 화면이 클때는 302px,306px을 잡아먹어서 
      콘텐츠 공간이 너무 좁게 잡힘... 피그마를 무시해야하나 어째야하나  */}
      <div className="relative mx-auto flex max-w-screen-md flex-col justify-center px-7 md:px-0">
        {/* 콘텐츠 섹션 */}
        <div className="mt-[26.85px] w-full rounded-lg md:mt-[56px]">
          {/* tip이 로드되었을 때만 렌더링 */}
          {tipData && (
            <>
              {/* 제목, 작성자, 작성일 */}
              <h1 className="mb-[6px] text-2xl font-semibold leading-9 text-sub-gray-500 md:mb-3 md:text-5xl md:font-bold md:leading-[72px]">
                {tipData.title}
              </h1>
              <p className="mb-[18px] ml-[1px] text-sm text-sub-gray-300 md:mb-[23px] md:ml-[6px] md:text-base">
                작성자 : {tipData.author} | 작성일 :{' '}
                {new Date(tipData.created_at).toLocaleDateString()}
              </p>

              {/* 회색줄 */}
              <div className="relative mb-[34px] h-[2px] w-full bg-sub-gray-100 md:mb-[52px]"></div>

              {/* 내용 */}
              <div className="space-y-4 text-sm font-normal leading-normal text-sub-gray-500 md:text-2xl md:leading-9">
                <div dangerouslySetInnerHTML={{ __html: tipData.content }} />
              </div>

              {/* 원본 링크 */}
              {tipData.link && (
                <div className="mt-8 text-center">
                  <a
                    href={tipData.link}
                    target="_blank"
                    rel="noopener noreferrer" // 보안을 강화하고 원래 페이지 URL 정보 숨기기
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
