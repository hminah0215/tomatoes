import Tag from '@/components/common/Tag';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className='flex gap-2 mb-4'>
        <Tag type="hot" label="HOT"/>
        <Tag type="best" label="BEST"/>
        <Tag type="new" label="NEW"/>
      </div>
    </>
  );
}