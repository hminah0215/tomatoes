// 구 페이지네이션 컴포넌트 타입
type PaginationOldProps<T> = {
  contents: T[];
  GridItem: React.ComponentType<GridItemProps<T>>;
  webItemPerPage: number;
  mobileItemPerPage: number;
  columnStyle: GridColumns;
  gapStyle: GapStyles;
};

type PaginationUIProps<T> = {
  items: T[];
  GridItem: React.ComponentType<{ item: T }>;
  columnStyle: GridColumns;
  gapStyle: GapStyles;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
};

type PaginationProps<T> = {
  contents: T[];
  GridItem: React.ComponentType<GridItemProps<T>>;
  itemPerPage: number;
  columnStyle: GridColumns;
  gapStyle: GapStyles;
};

interface BaseItem {
  id: number;
  title: string;
  company: string;
  view_count: number;
  thumbnail_url: string;
  start_date: string;
  end_date: string;
  award_info: string;
  dominant_color: string;
  description: string;
  homepage_url: string;
  registration_date: string;
  created_at: string;
  updated_at: string;
  d_day: number;
}

interface Activity extends BaseItem {
  field: string;
  activity: string;
  host: string;
  duration: string;
  region: string;
}

interface Contest extends BaseItem {
  department: string;
  prize_amount: string;
  prize_benefit: string;
  target: string;
  organizer: string;
}

type CategoryType = {
  activity: Activity;
  contest: Contest;
  tips: Tip;
};

type FilterableSortableCategory = Extract<
  keyof CategoryType,
  'activity' | 'contest'
>;

interface PaginationParams<T extends keyof CategoryType> {
  page: number;
  itemsPerPage: number;
  category: T;
  filters?: T extends FilterableSortableCategory ? string[] : never;
  sort?: T extends FilterableSortableCategory
    ? '관련도순' | '최신순' | '조회순' | '마감순'
    : never;
}

interface PaginationResult<T> {
  data: T[] | null;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  error: Error | null;
}
