export default function ActivityContestSkeleton() {
  return (
    <div className="w-full">
      {/* Mobile Thumbnail */}
      <div className="skeleton aspect-[3/4] w-full rounded-[20px] sm:hidden" />
      {/* Desktop Thumbnail */}
      <div className="skeleton hidden aspect-[5/6] w-full rounded-[20px] sm:block" />

      <div className="mt-2 w-full md:mt-4">
        <div className="skeleton mb-2 h-[3em] w-full md:h-[3.9em]" />
        <div className="skeleton mb-2 h-6 w-3/4" />
        <div className="flex items-center gap-1.5">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-5 w-24" />
        </div>
      </div>
    </div>
  );
}
