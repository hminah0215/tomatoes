export function getTagLabel(
  views?: number | null | undefined,
  created_at?: string | null
): 'hot' | 'new' | 'best' {
  if (!created_at) return 'best';

  const createdDate = new Date(created_at);
  const isNew =
    (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24) < 7;

  if (isNew) return 'new';
  if (views && views >= 100) return 'hot';
  return 'best';
}
