'use client';
import { usePathname } from 'next/navigation';

type GridViewProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
};

export default function GridViewTest<T>({
  items,
  renderItem,
}: GridViewProps<T>) {
  const pathname = usePathname();

  // 경로에 따라 그리드 레이아웃 설정
  const gridClass = () => {
    switch (pathname) {
      case '/':
        // '/' 경로에서는 웹 2 * 4, 모바일 2 * 3
        return 'grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4';
      case '/magazine':
        // '/magazine' 경로에서는 웹 2 * 4, 모바일 2 * 3
        return 'grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4';
      case '/activity':
      case '/contest':
        // '/activity', '/contest' 경로에서는 웹 4 * 4, 모바일 2 * 5
        return 'grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4';
      default:
        // 기본 레이아웃 설정
        return 'grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4';
    }
  };

  return (
    <div className={`grid w-full ${gridClass()}`}>
      {items.map((item, index) => (
        // renderItem 함수로 각 항목을 렌더링
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
