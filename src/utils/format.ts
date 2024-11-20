import { parseISO, format } from 'date-fns';

export const formatViewCount = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const formatDate = (date: string) => format(parseISO(date), 'yy.MM.dd');

export const dateToFormatDate = (date: Date) => {
  // Date 객체를 받아 정해진 날짜 형식으로 변경.
  return format(date, 'yy.MM.dd');
};