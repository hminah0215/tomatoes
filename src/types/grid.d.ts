// 그리드 열 수 정의
type ColumnStyles = 'web4mobile2' | 'web3mobile1';

type GapStyles = 'gapStyle1' | 'gapStyle2' | 'gapStyle3';

type SlideColumnStyles = 'web3mobile3' | 'web6mobile6';

type SlideGaptyles = 'slideGapStyle1' | 'slideGapStyle2';

type PaginationProps<T> = {
  contents: T[];
  GridItem: React.ComponentType<GridItemProps<T>>;
  webItemPerPage: number;
  mobileItemPerPage: number;
  columnStyle: GridColumns; // 그리드 열 수를 미리 약속된 값으로 지정
  gapStyle: GapStyles; // 그리드 스타일
};

type GridViewProps<T> = {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  columnStyle: ColumnStyles; // 그리드 열 수를 미리 약속된 값으로 지정
  gapStyle: GapStyles;
};

// 그리드 슬라이드뷰
interface GridSlideViewProps<T> {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  slideColumnStyle: SlideColumnStyles;
  slideGapStyle: SlideGaptyles;
}

type GridItemProps<T> = {
  item: T;
};
