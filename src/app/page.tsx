import Dday from '@/components/common/Dday';
import Tag from '@/components/common/Tag';
import Pagination from '@/components/ui/pagination/Pagination';

export default function Home() {
  const dummyActivities: Activity[] = Array.from({ length: 80 }, (_, i) => ({
    imageUrl: '/assets/test_image.png',
    title: `활동 타이틀 ${i + 1}`,
    organization: `주최 기관 ${i + 1}`,
    dDay: `${Math.floor(Math.random() * 30)}`, // 0 ~ 29일 랜덤 마감일
    receptionPeriod: `10월 ${Math.floor(Math.random() * 10) + 1}일(월) ~ 10월 ${Math.floor(Math.random() * 20) + 10}일(금)`,
    category: i % 3 === 0 ? '대외활동' : i % 3 === 1 ? '공모전' : '교육・강연',
    viewCount: Math.floor(Math.random() * 5000) + 1000, // 1000 ~ 6000 랜덤 조회수
  }));

  return (
    <>
      <h1>main component</h1>
      <div className="flex gap-2 mb-4">
        <Tag type="hot" label="HOT" />
        <Tag type="best" label="BEST" />
        <Tag type="new" label="NEW" />
      </div>
      <div className="flex gap-2 mb-4">
        <Dday type="active" day="30" color="red" />
        <Dday type="active" day="00" color="green" />
        <Dday type="active" day="00" color="yellow" />
        <Dday type="upcoming" />
        <Dday type="completed" />
      </div>
      <Pagination contents={dummyActivities} />
    </>
  );
}
