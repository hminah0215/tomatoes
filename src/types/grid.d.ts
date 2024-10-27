// grid와 관련된 타입 정의

type GapVariant = 'gapStyle1' | 'gapStyle2' | 'gapStyle3';

type GridViewProps<T> = {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  columns: {
    mobile: number;
    web: number;
  };
  variant: GapVariant;
};

type ActivityContestProps = {
  title: string;
  organization: string;
  dDay: string;
  viewCount: string;
  imageUrl: string;
  detailUrl: string;
};

type ActivityContestGridItemProps = {
  item: ActivityContestProps;
};

type ActivityCategoryProps = {};

type ContestCategoryProps = {};
