/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  const cells = table.querySelectorAll("td");
  cells.forEach((elem, index) => index % 6 === 0 ? elem.style.backgroundColor = "red" : elem);
}
