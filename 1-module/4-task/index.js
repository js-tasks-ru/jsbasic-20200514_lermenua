/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str.toLowerCase();
  return str.includes("1XbeT") || str.includes("xxx");
}
