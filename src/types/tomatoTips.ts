export interface TomatoTipDataType {
  id: number;
  title: string;
  link: string;
  content: string;
  author: string | null;
  created_at: string | null;
  views?: number | null;
}
