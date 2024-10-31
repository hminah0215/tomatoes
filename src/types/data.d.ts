type ActivityContestDetailsProps = {
  title: string;
  organization: string;
  dDay: string;
  receptionPeriod: string;
  category: '대외활동' | '공모전';
  viewCount: string;
  imageUrl: string;
  detailUrl: string;
};

type ActivityContestListProps = {
  item: ActivityContestDetailProps;
};

type ActivityContestDataType = {
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
  main_category: '대외활동' | '공모전';
  homepage_url: string;
  registration_date: string;
  d_day: number;

  field?: string | null;
  activity?: string | null;
  host?: string | null;
  duration?: string | null;
  region?: string | null;
  department?: string | null;
  prize_amount?: string | null;
  prize_benefit?: string | null;
  target?: string | null;
  organizer?: string | null;
};

type MainSliderDataProps = {
  id: number;
  title: string;
  main_category: '대외활동' | '공모전';
  start_date: string;
  end_date: string;
  thumbnail_url: string;
  homepage_url: string;
  dominant_color: string;
};

type MainSliderListProps = {
  item: MainSliderDataProps;
};

type ContestActivityDataProps = {
  id: number;
  title: string;
  d_day: number;
  start_date: string;
  end_date: string;
  view_count: number;
  main_category: '공모전' | '대외활동';
  thumbnail_url: string;
  homepage_url: string;
};

type ContestActivityDataPropsWithViewCount = {
  id: number;
  title: string;
  company: string;
  d_day: number;
  view_count: number;
  main_category: '공모전' | '대외활동';
  thumbnail_url: string;
  start_date: string;
  end_date: string;
};

type ContestActivityListProps = {
  item: ContestActivityDataProps;
};

type ContestActivityData = {
  id: number;
  title: string;
  company: string;
  d_day: number;
  view_count: number;
  main_category: '공모전' | '대외활동';
  thumbnail_url: string;
};

type ActivityContestItemProps = {
  item: ContestActivityData;
};

type FetchActivityContestAbstractParams = {
  filters?: string[];
  sort?: string;
  mainCategory: string;
};
