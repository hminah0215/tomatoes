import Dday from '@/components/common/Dday';
import Tag from '@/components/common/Tag';

export default function Home() {
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
    </>
  );
}