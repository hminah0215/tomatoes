const ItemSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-gray-200 sm:hidden" />

      <div className="relative hidden aspect-[5/6] w-full overflow-hidden rounded-[20px] bg-gray-200 sm:block" />

      <div className="mt-2 flex w-full flex-1 flex-col justify-between md:mt-4">
        <div className="mb-2 h-5 w-full rounded-lg bg-gray-200 md:h-6" />

        <div>
          <div className="mb-2 h-4 w-3/4 rounded-lg bg-gray-200 md:h-5" />

          <div className="flex items-center gap-1.5">
            <div className="h-[22px] w-16 rounded-full bg-gray-200" />
            <div className="h-4 w-20 rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ActivityContestSkeleton() {
  const items = Array(16).fill(null);

  return (
    <div className="px-7 md:px-[88px]">
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10 md:gap-y-12">
          {items.map((_, index) => (
            <ItemSkeleton key={index} />
          ))}
        </div>

        <div className="my-14 flex justify-center">
          <div className="mr-6 flex gap-3 md:mr-12 md:gap-4">
            {[1, 2].map((i) => (
              <div
                key={`prev-${i}`}
                className="h-6 w-6 rounded-full bg-gray-200 sm:h-6 sm:w-6 md:h-8 md:w-8"
              />
            ))}
          </div>

          <div className="flex gap-6 md:gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={`page-${i}`}
                className="h-6 w-4 rounded-lg bg-gray-200 md:h-7 md:w-5"
              />
            ))}
          </div>

          <div className="ml-6 flex gap-3 md:ml-12 md:gap-4">
            {[1, 2].map((i) => (
              <div
                key={`next-${i}`}
                className="h-6 w-6 rounded-full bg-gray-200 sm:h-6 sm:w-6 md:h-8 md:w-8"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
