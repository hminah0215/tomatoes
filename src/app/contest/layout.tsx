import CategoryHeader from '@/components/common/CategoryHeader';

export default function ContestLayout({
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
