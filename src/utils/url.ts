import { useSearchParams } from 'next/navigation';

export const useDetailUrl = (id: number, category: string) => {
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

  // 현재 route에 기반한 baseUrl 생성
  const baseUrl = `/${category}/${id}`;
  const queryString = getQueryParams();

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
