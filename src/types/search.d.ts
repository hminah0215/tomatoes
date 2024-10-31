type SearchBarProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

type SearchResult = {
  id: number;
  title: string;
  author?: string; // `tomato_tips` 전용
  company?: string; // `activities_contests` 전용
  link?: string;
  content?: string;
  description?: string;
  created_at?: string;
  view_count?: number;
  thumbnail_url?: string; // `activities_contests` 전용
  main_category?: string; // `activities_contests` 전용
  homepage_url?: string; // `activities_contests` 전용
  start_date?: string;
  end_date?: string;
  award_info?: string;
  dominate_color?: string;
};

type SearchResultsProps = {
  results: SearchResult[];
  query: string;
};
