export function getChunkOfTenElements(objects: any[], number: string | undefined) {
  const num = number ? Number(number) : 1;
  const startIndex = (num - 1) * 10;
  const endIndex = startIndex + 10;
  const chunk = objects.slice(startIndex, endIndex);
  return chunk;
}


