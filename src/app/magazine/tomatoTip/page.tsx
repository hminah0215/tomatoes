import TomatoTips from '@/containers/magazine/TomatoTips';

export default function Page() {
  return (
    <>
      <div className="relative mb-[28px] ml-[28px] mt-[40px] md:my-0 md:ml-0 md:px-[88px] md:pt-[66px]">
        <div className="font-['Recipekorea'] text-[20px] font-medium leading-[30px] text-sub-gray-500 md:text-[32px] md:leading-[48px]">
          토마토 Tip
        </div>
      </div>
      <TomatoTips showPagination={true} />
    </>
  );
}
