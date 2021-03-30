/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(() => {});
 * // => true
 *
 * isFunction(/abc/);
 * // => false
 */
const isFunction = (value) => {
  return typeof value === "function";
};

export default isFunction;
