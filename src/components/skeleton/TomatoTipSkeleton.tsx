export default function TomatoTipSkeleton() {
  return (
    <div>
      <div className="skeleton mb-3 h-[230px] rounded-[20px] md:mb-4 md:h-[290px]" />
      <div className="flex h-10 flex-col items-start justify-between gap-2 md:h-[74px]">
        <div className="inline-flex items-center gap-3">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-5 w-3/4" />
        </div>
        <div className="skeleton hidden h-[30px] w-[120px] md:block" />
      </div>
    </div>
  );
}
