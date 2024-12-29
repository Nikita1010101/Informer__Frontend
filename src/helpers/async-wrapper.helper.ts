export const asyncWrapper = (asyncFunction: () => Promise<void>) => {
  return (async () => await asyncFunction())()
}
