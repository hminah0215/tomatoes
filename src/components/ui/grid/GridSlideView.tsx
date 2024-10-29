/**
 * GridSlideView 컴포넌트는
 * PC화면에선 그리드, 모바일화면에선 슬라이드 레이아웃으로 렌더링됩니다.
 *.
 *
 * @param {'web3mobile3' | 'web6mobile6'} props.slideColumnStyles - 작업환경에 맞게 개수를 추가해도 됩니다.
 *    - 'web3mobile3': 모바일에서 3열, 웹에서 3열 그리드&슬라이드
 *    - 'web6mobile6': 모바일에서 6열, 웹에서 6열 그리드&슬라이드
 * @param {'slideGapStyle1' | 'slideGapStyle2'} props.slideGapStyles - 작업환경에 맞게 스타일을 추가해도 됩니다.
 *    - 'slideGapStyle1': 홈 하단 <매거진> , 토마토Pick <지금 꼭 봐야하는 매거진>에서 사용됩니다.
 *    - 'slideGapStyle2': 홈 하단 <공모전>, <대외활동>에서 사용됩니다.
 *
 *
 * @returns {JSX.Element} 그리드,슬라이드 레이아웃으로 렌더링된 항목들을 반환합니다.
 */

export default function GridSlideView<T>({
  items,
  GridItem,
  slideColumnStyle,
  slideGapStyle,
}: GridSlideViewProps<T>) {
  // 슬라이드 컬럼 스타일 정의
  const slideColumnStyles = {
    web3mobile3: { mobile: 3, web: 3 },
    web6mobile6: { mobile: 6, web: 6 },
  };

  // 갭 스타일 정의
  // 한줄씩만 표시되니까 gap-y는 없어도 되는거 같은데??
  const slideGapStyles = {
    slideGapStyle1: 'gap-x-[16px]  md:gap-x-[30px] ',
    slideGapStyle2: 'gap-x-[16px]  md:gap-x-[32px] ',
  };

  // 그리드 클래스 정의
  const gridClass = `
    flex overflow-x-auto  ${slideGapStyles[slideGapStyle]} 
    grid-cols-${slideColumnStyles[slideColumnStyle].mobile} 
    md:grid md:grid-cols-${slideColumnStyles[slideColumnStyle].web}
  `.trim();

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
}
