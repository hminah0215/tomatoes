type ColumnStyles = 'web4mobile2' | 'web3mobile1';

type GapStyles = 'gapStyle1' | 'gapStyle2' | 'gapStyle3';

type SlideColumnStyles = 'web3mobile3' | 'web6mobile6';

type SlideGaptyles = 'slideGapStyle1' | 'slideGapStyle2';

type GridViewProps<T> = {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  columnStyle: ColumnStyles;
  gapStyle: GapStyles;
};

interface GridSlideViewProps<T> {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  slideColumnStyle: SlideColumnStyles;
  slideGapStyle: SlideGaptyles;
}

type GridItemProps<T> = {
  item: T;
};
