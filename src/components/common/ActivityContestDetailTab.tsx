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
    <ul className="mb-16 mt-40 flex items-center justify-center border-b-[1px] border-sub-gray-100">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 cursor-pointer pb-[18px] text-center text-2xl font-semibold ${
            activeTab === tab
              ? 'border-b-4 border-point-red-500 text-point-red-500'
              : 'text-sub-gray-200'
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
