export default function GridViewTest<T>({
  items,
  GridItem,
  columns,
  variant,
}: GridViewProps<T>) {
  // 커스텀 gap 정의
  const gapVariants = {
    gapStyle1: 'gap-x-14 gap-y-40 md:gap-x-20 md:gap-y-80', // BEST PICK, 토마토들 추천활동, 토마토 Pick
    gapStyle2: 'gap-x-14 gap-y-32 md:gap-x-20 md:gap-y-64', // 대외활동, 공모전
    gapStyle3: 'gap-x-0 gap-y-16 md:gap-x-30 md:gap-y-80', // 토마토 Tip
  };

  const gridClass = `
    grid 
    grid-cols-${columns.mobile} 
    md:grid-cols-${columns.web} 
    ${gapVariants[variant]}
  `.trim();

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
