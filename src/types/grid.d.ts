// 그리드 열 수 정의
type ColumnStyles = 'web4mobile2' | 'web3mobile1';

type GapStyles = 'gapStyle1' | 'gapStyle2' | 'gapStyle3';

type PaginationTestProps<T> = {
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

type GridItemProps<T> = {
  item: T;
};

type ActivityContestDetailsProps = {
  title: string;
  organization: string;
  dDay: string;
  receptionPeriod: string; // 접수 기간
  category: '대외활동' | '공모전'; // 카테고리 추가
  viewCount: string; // 조회수 추가
  imageUrl: string;
  detailUrl: string;
};

type ActivityContestListProps = {
  item: ActivityContestDetailsProps;
};
