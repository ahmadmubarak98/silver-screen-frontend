/**
 * [Simplified] Checks if `value` is classified as a string primitive.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 */
const isString = (value) => {
  return typeof value === "string";
};

export default isString;
