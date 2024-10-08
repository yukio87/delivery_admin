export const getRangeByPage = (
  page: number,
  numElementsPerPage: number,
): [number, number] => {
  const start = (page - 1) * numElementsPerPage
  const end = page * numElementsPerPage - 1

  return [start, end]
}
