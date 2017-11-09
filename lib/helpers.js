import moment from 'moment'

/**
 * Trim date string
 * @param {string} date
 */
export function trimDate (date) {
  let result = date.length > 10
    ? date.slice(0, 10)
    : date

  return result.split('-')
    .join('')
}

/**
 * Get formatted date from momentJS
 * @param {string} date
 */
export function getFormattedDate (date) {
  return moment(date).format('ll')
}

/**
 * Get date format for mano blog
 * @param {string} date
 */
export function getDate (date) {
  return getFormattedDate(trimDate(date))
}