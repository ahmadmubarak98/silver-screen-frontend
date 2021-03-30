/**
 * Easy partial string matching.
 * @param {string} value
 * @param {string} query
 * 
 * @example
 * ```
 * matches('123456', '234') // true
 * matches('123456', '134') // false
 * ```
 */
const matches = (value, query) => {
  if(query === '') return true;
  if (!query || !value) return false;
  return new RegExp(query, "i").test(value);
};

export default matches;