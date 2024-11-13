export default function HomeGridSkeleton() {
  return (
    <div className="relative">
      {/* Mobile View */}
      <div className="block w-full sm:hidden">
        <div className="skeleton absolute ml-4 mt-5 h-8 w-20 rounded-full" />
        <div className="skeleton h-[200px] w-full rounded-[20px]" />
      </div>

      {/* Desktop View */}
      <div className="hidden w-full sm:block">
        <div className="skeleton absolute ml-5 mt-5 h-9 w-24 rounded-full" />
        <div className="skeleton h-[360px] w-full rounded-[20px]" />
      </div>

      <div className="mt-2 md:mt-4">
        <div className="skeleton mb-2 h-12 w-full md:h-[78px]" />
        <div className="flex items-center gap-1.5">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-5 w-32" />
        </div>
      </div>
    </div>
  );
}
