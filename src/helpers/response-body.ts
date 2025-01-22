export function responseBody(data: unknown, key?: string) {
  return key ? { data: { [key]: data } } : { data }
}
