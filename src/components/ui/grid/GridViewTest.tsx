/**
 * GridViewTest 컴포넌트는 주어진 항목을 그리드 레이아웃으로 렌더링합니다.
 *
 * @template T 항목의 타입을 나타냅니다.
 * @param {Object} props - 컴포넌트의 속성입니다.
 * @param {T[]} props.items - 렌더링할 항목들의 배열입니다.
 * @param {React.ComponentType<{ item: T }>} props.GridItem - 각 항목을 렌더링할 컴포넌트입니다.
 * @param {'web4mobile2' | 'web3mobile1'} props.columnStyle - 모바일 및 웹에서의 그리드 열 수를 정의하는 스타일입니다.
 *    - 'web4mobile2': 모바일에서 2열, 웹에서 4열 그리드
 *    - 'web3mobile1': 모바일에서 1열, 웹에서 3열 그리드
 * @param {'gapStyle1' | 'gapStyle2' | 'gapStyle3'} props.gapStyle - 그리드 항목 간의 간격 스타일입니다.
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
