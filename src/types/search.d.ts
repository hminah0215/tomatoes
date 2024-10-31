type SearchBarProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

type SearchResult = {
  id: number;
  title: string;
  author?: string;
  company?: string;
  link: string | null;
  content?: string;
  description?: string;
  created_at?: string;
  view_count?: number;
  thumbnail_url: string | null;
  main_category?: string;
  homepage_url?: string;
  start_date?: string;
  end_date?: string;
  award_info?: string;
  dominate_color?: string;
  d_day?: number;
  start_date?: string;
  end_date?: string;
};

type SearchResultsProps = {
  results: SearchResult[];
  query: string;
};
