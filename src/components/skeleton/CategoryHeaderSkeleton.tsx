export default function CategoryHeaderSkeleton() {
  return (
    <header className="mb-6 animate-pulse pt-9 md:mb-14 md:pt-[74px]">
      {/* Title Skeleton */}
      <div className="pb-7 pl-7 md:pl-[88px]">
        <div className="h-8 w-32 rounded-lg bg-gray-200 md:h-10 md:w-40" />
      </div>

      {/* Tab Menu Skeleton */}
      <section className="flex justify-between overflow-x-auto overflow-y-hidden border-b-[1px] md:mx-[88px]">
        <nav>
          <ul className="ml-[14px] flex gap-8 whitespace-nowrap md:gap-20">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="pb-4">
                <div className="h-6 w-16 rounded-lg bg-gray-200" />
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Filter Panel Skeleton */}
      <section className="mx-5 mt-7 flex flex-col gap-4 border-b-[1px] border-sub-gray-100 pb-7 md:mx-[88px]">
        <div className="flex flex-wrap gap-[6px] md:gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="h-8 w-20 rounded-full bg-gray-200 md:h-9 md:w-24"
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="h-6 w-16 rounded-lg bg-gray-200" />
            ))}
          </div>
          <div className="h-6 w-16 rounded-lg bg-gray-200" />
        </div>
      </section>
    </header>
  );
}
