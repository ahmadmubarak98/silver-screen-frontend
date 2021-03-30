/**
 * Inserts the given separator after every digit followed by three other digit characters.
 * @param {string} string Number as string to be formatted.
 * @returns {string} The formatted string.
 * @example
 *```
 * applyThousandSeparator("1000000") // 1,000,000
 * ```
 * Inspired by react-number-format
 * @see https://github.com/s-yadav/react-number-format/blob/master/src/utils.js
 */
const applyThousandSeparator = (string, separator = ",") => {
  if (typeof string === "number") string = `${string}`;
  if (typeof string !== "string") return "";

  // match any digit character that is followed by three other digit characters
  // without matching any of the digits in between or any of the digits after the decimal point
  const [int, dec] = string.split(".");
  const thousandsGroupRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  return `${int.replace(thousandsGroupRegex, `$&${separator}`)}${
    dec ? `.${dec}` : ""
  }`;
};

export default applyThousandSeparator;
