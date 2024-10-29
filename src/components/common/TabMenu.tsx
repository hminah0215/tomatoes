import TabMenuItem from './TabMenuItem';

interface TabMenuProps {
  tabs: { name: string; path: string | null }[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
  containerClass?: string;
  tabClass?: string;
}

export default function TabMenu({ tabs, activeTab, onTabClick }: TabMenuProps) {
  return (
    <section className="flex justify-between overflow-x-auto overflow-y-hidden border-b-[1px] md:mx-[88px]">
      <nav>
        <ul className="ml-[14px] flex gap-8 whitespace-nowrap md:gap-20">
          {tabs.map((tab, index) => (
            <TabMenuItem
              key={index}
              tab={tab.name}
              path={tab.path}
              isActive={activeTab === tab.name}
              onClick={() => onTabClick(tab.name)}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
