/**
 * Convert locale from `en-US` to `EN_US`
 * @param {string} locale local key from browser
 * @returns {string}
 */
export const formatLocale = (locale) => locale.toUpperCase().replace(/-/g, '_')

/**
 * Access nested object value with array path
 * @param {object} obj nested object
 * @param {array} path access path
 */
export const getNestedObjValue = (obj, path) =>
  path.reduce((acc, key) => acc?.[key], obj)
