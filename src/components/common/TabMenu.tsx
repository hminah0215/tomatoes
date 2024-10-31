import TabMenuItem from './TabMenuItem';
import { usePathname } from 'next/navigation';

interface TabMenuProps {
  tabs: { name: string; path: string | null }[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
  isMagazine: boolean;
  containerClass?: string;
  tabClass?: string;
}

export default function TabMenu({
  tabs,
  activeTab,
  onTabClick,
  isMagazine,
}: TabMenuProps) {
  const pathname = usePathname();

  return (
    <section className="flex justify-between overflow-x-auto overflow-y-hidden border-b-[1px] md:mx-[88px]">
      <nav>
        <ul className="ml-[14px] flex gap-8 whitespace-nowrap md:gap-20">
          {tabs.map((tab, index) => (
            <TabMenuItem
              key={index}
              tab={tab.name}
              path={tab.path}
              isActive={
                isMagazine ? pathname === tab.path : activeTab === tab.name
              }
              onClick={() => onTabClick(tab.name)}
              isMagazine={isMagazine}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
