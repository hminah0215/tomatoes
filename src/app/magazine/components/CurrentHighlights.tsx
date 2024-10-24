import TomatoTips from './TomatoTips';

const CurrentHighlights = () => {
  return (
    <div className="mx-auto max-w-[1264px]">
      <div className="font-['Recipekorea'] text-[32px] font-normal leading-[48px] text-sub-gray-500">
        지금 꼭 봐야하는 매거진
      </div>

      <TomatoTips pageSize={3} showPagination={false} />
    </div>
  );
};

export default CurrentHighlights;
