import CategoryHeader from '@/components/common/CategoryHeader';

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CategoryHeader />
      {children}
    </>
  );
}
