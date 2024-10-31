export const calculateRelevanceScore = (
  item: SearchResult,
  query: string
): number => {
  const title = item.title || '';
  const content = item.content || item.description || '';

  if (title.includes(query) && content.includes(query)) {
    return 3; // 제목과 본문 모두 포함
  } else if (title.includes(query)) {
    return 2; // 제목에만 포함
  } else if (content.includes(query)) {
    return 1; // 본문에만 포함
  }
  return 0; // 포함되지 않음
};
