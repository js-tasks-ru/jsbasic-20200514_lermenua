/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (str === "") {
    return "";
  } else {
    return str.split("-")
      .map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
      .join("");
  }
}
