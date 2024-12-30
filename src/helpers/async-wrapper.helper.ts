export const asyncWrapper = (asyncFunction: () => Promise<void>) => {
  return (async () => {
    try {
      await asyncFunction()
    } catch (error) {
      console.error(error)
    }
  })()
}
