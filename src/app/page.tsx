import Tag from '@/components/common/Tag';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className='flex gap-2 mb-4'>
        <Tag type="hot" />
        <Tag type="best" />
        <Tag type="new" />
      </div>
    </>
  );
}