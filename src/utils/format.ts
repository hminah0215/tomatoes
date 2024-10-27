export const formatViewCount = (count: string) => {
  return new Intl.NumberFormat('ko-KR').format(Number(count));
};
