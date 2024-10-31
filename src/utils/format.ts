import { parseISO, format } from 'date-fns';

export const formatViewCount = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const formatDate = (date: string) => format(parseISO(date), 'yy.MM.dd');
