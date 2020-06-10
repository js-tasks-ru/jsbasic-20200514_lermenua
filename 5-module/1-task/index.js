/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const trow = table.querySelectorAll("tr");

  trow.forEach((item) => {
    let tds = item.children;
    let newTd = [...tds];
    if (Number.parseInt(newTd[1].textContent) < 18) {
      item.style.textDecoration = "line-through";
    }
    if (newTd[2].textContent === "m") {
      item.classList.add("male");
    } else {
      item.classList.add("female");
    }
    switch (true) {
    case newTd[3].dataset.available === "true": {
      item.classList.toggle("available");
      break;
    }
    case newTd[3].dataset.available === "false": {
      item.classList.toggle("unavailable");
      break;
    }
    default:
      item.setAttribute("hidden", "");
    }

  });
}




