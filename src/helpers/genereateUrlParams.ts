type GenerateURLParams = {
  limit: string | undefined;
  page: string | undefined;
  offset: string | undefined;
}

export function generateURLParams({ limit, page, offset }: GenerateURLParams) {
  const params = new URLSearchParams();

  if (offset !== undefined) {
    params.append('offset', offset);
  }

  if (limit !== undefined) {
    params.append('limit', limit);
  }

  if (page !== undefined) {
    params.append('page', page);
  }

  const url = params.toString();

  return url;
}
