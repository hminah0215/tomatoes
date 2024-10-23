import Image from 'next/image';

type PaginationControlProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void; // page는 number 타입, 반환 타입은 void
};

function PaginationControl({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlProps) {
  const pagesToShow = 5; // 한번에 5개의 페이지를 표시
  const startPage =
    Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const handleFirst = () => onPageChange(1);
  const handlePrevious = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);
  const handleLast = () => onPageChange(totalPages);

  return (
    <div className="flex justify-center my-14">
      <div className="mr-6 md:mr-12 flex gap-3 md:gap-4">
        <button onClick={handleFirst}>
          <Image
            src="/assets/pagination/Pagination_first.svg"
            alt="처음"
            width={24}
            height={24}
            className="sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
          />
        </button>
        <button onClick={handlePrevious}>
          <Image
            src="/assets/pagination/Pagination_prev.svg"
            alt="이전"
            width={24}
            height={24}
            className="sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
          />
        </button>
      </div>

      <div className="flex gap-6 md:gap-8">
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const page = startPage + index;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`text-base md:text-lg font-medium ${page === currentPage ? 'text-sub-gray-500' : 'text-sub-gray-200'}`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <div className="ml-6 md:ml-12 flex gap-3 md:gap-4">
        <button onClick={handleNext} className="">
          <Image
            src="/assets/pagination/Pagination_next.svg"
            alt="다음"
            width={24}
            height={24}
            className="sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
          />
        </button>
        <button onClick={handleLast} className="">
          <Image
            src="/assets/pagination/Pagination_last.svg"
            alt="끝"
            width={24}
            height={24}
            className="sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
          />
        </button>
      </div>
    </div>
  );
}

export default PaginationControl;
