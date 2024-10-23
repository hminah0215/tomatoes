import TomatoTips from './TomatoTips';

const CurrentHighlights = () => {
  return (
    <div className="max-w-[1264px] mx-auto">
      <div className="text-sub-gray-500 text-[32px] font-normal font-['Recipekorea'] leading-[48px]">
        지금 꼭 봐야하는 매거진
      </div>

      <TomatoTips pageSize={3} showPagination={false} />
    </div>
  );
};

export default CurrentHighlights;
