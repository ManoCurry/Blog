// formatDate
export function formatDate (date) {
  let result = date.length > 10
    ? date.slice(0, 10)
    : date

  return result.split('-')
    .join('')
}
