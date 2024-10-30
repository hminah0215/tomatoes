import { useSearchParams } from 'next/navigation';

export const useDetailUrl = (
  id: number,
  mainCategory: '공모전' | '대외활동'
) => {
  const searchParams = useSearchParams();

  const getQueryParams = () => {
    const params = new URLSearchParams();
    const paramKeys = ['tab', 'filters', 'sort'] as const;

    paramKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params.append(key, value);
    });

    return params.toString();
  };

  const baseUrl =
    mainCategory === '공모전' ? `/contest/${id}` : `/activity/${id}`;
  const queryString = getQueryParams();

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
