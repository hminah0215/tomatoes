/**
 * GridView 컴포넌트는 주어진 항목을 그리드 레이아웃으로 렌더링합니다.
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

export default function GridView<T>({
  items,
  GridItem,
  columnStyle,
  gapStyle,
}: GridViewProps<T>) {
  const columnStyles = {
    web4mobile2: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4',
    web3mobile1: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  };

  const gapStyles = {
    gapStyle1: 'gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12',
    gapStyle2: 'gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12',
    gapStyle3: 'gap-x-2 gap-y-6 md:gap-x-8 md:gap-y-10',
  };

  const gridClass =
    `grid ${columnStyles[columnStyle]} ${gapStyles[gapStyle]}`.trim();

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
