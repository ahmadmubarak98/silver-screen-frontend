/**
 * [Simplified] Checks if `value` is classified as a non null object.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({ name: 'john' });
 * // => true
 *
 * isObject(null);
 * // => false
 */
const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

export default isObject;
