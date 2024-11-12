type ActivityContestDetailTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ActivityContestDetailTab({
  activeTab,
  setActiveTab,
}: ActivityContestDetailTabProps) {
  const tabs = ['상세내용', '토마토 TIP', '수상작 갤러리'];

  return (
    <ul className="mt-8 mb-8 flex items-center justify-center border-b-[1px] border-sub-gray-100 md:mt-40">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 cursor-pointer pb-[18px] text-center text-base font-medium md:text-2xl md:font-semibold ${
            activeTab === tab
              ? 'border-b-2 border-point-red-500 text-point-red-500 md:border-b-4'
              : 'text-sub-gray-200'
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
