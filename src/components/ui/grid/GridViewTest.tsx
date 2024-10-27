export default function GridViewTest<T>({
  items,
  GridItem,
  columns,
  gaps,
}: GridViewProps<T>) {
  const gridClass = `
    grid
    sm:grid-cols-${columns.mobile} 
    md:grid-cols-${columns.web} 
    gap-x-${gaps.mobile.x} 
    gap-y-${gaps.mobile.y} 
    md:gap-x-${gaps.web.x} 
    md:gap-y-${gaps.web.y}
  `;

  return (
    <div className={`grid w-full ${gridClass}`}>
      {items.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
