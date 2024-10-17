'use client';
import { usePathname } from 'next/navigation';
import GridItem from './GridItem';

type GridViewProps = {
  activities: Activity[];
};

export default function GridView({ activities }: GridViewProps) {
  const pathname = usePathname();

  // 공모전, 대외활동, 교육강연 페이지 여부 확인
  const isSpecialRoute = ['/activity', '/contest', '/talk'].includes(pathname);

  return (
    <div
      className={
        isSpecialRoute
          ? // 공모전, 대외활동, 교육강연 페이지: PC 4x4, 모바일 2x8
            'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'
          : // 그 외의 페이지: PC 4x2, 모바일 2x4
            'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4'
      }
    >
      {activities.map((activity, index) => (
        <GridItem key={index} activity={activity} />
      ))}
    </div>
  );
}
