/**
 * GridViewTest 컴포넌트는 주어진 항목을 그리드 레이아웃으로 렌더링합니다.
 *
 * @template T 항목의 타입을 나타냅니다.
 * @param {T[]} items - 렌더링할 항목들의 배열입니다.
 * @param {React.ComponentType<{ item: T }>} GridItem - 각 항목을 렌더링할 컴포넌트입니다.
 * @param {{ mobile: number, web: number }} columns - 모바일 및 웹에서의 그리드 열 수를 정의합니다.
 * @param {GapStyles} gapStyle - 그리드 아이템 간의 간격 스타일을 선택합니다.
 *    - 'gapStyle1': BEST PICK, 토마토들 추천활동, 토마토 Pick에 사용됩니다.
 *    - 'gapStyle2': 대외활동, 공모전에 사용됩니다.
 *    - 'gapStyle3': 토마토 Tip에 사용됩니다.
 *
 * @returns {JSX.Element} 그리드 레이아웃으로 렌더링된 항목들을 반환합니다.
 */

export default function GridViewTest<T>({
  items,
  GridItem,
  columnStyle,
  gapStyle,
}: GridViewProps<T>) {
  // 커스텀 gap 정의

  const columnStyles = {
    web4mobile2: { mobile: 2, web: 4 },
    web3mobile1: { mobile: 1, web: 3 },
  };

  const gapStyles = {
    gapStyle1: 'gap-x-14 gap-y-40 md:gap-x-20 md:gap-y-80', // BEST PICK, 토마토들 추천활동, 토마토 Pick
    gapStyle2: 'gap-x-14 gap-y-32 md:gap-x-20 md:gap-y-64', // 대외활동, 공모전
    gapStyle3: 'gap-x-0 gap-y-16 md:gap-x-30 md:gap-y-80', // 토마토 Tip
  };

  const gridClass = `
    grid 
    grid-cols-${columnStyles[columnStyle].mobile} 
    md:grid-cols-${columnStyles[columnStyle].web} 
    ${gapStyles[gapStyle]}
  `.trim();

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
