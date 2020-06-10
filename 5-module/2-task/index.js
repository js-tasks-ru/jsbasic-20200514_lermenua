/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 * @return {string}
 */

function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.items = items;
  this.el = document.createElement('table');


  const header = Object.keys(items[0]).map(item => {
    return `<td>${capitalize(item)}</td>`;
  })
    .join("");

  this.create = (items) => {
    let rows = items.map(item => {
      let p = "";
      for (let key in item) {
        p += `<td>${item[key]}</td>`;
      }
      return `<tr>${p}</tr>`;
    })
      .join("");
    return `<tbody>${rows}</tbody>`;
  };

  this.sortingItems = ((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  this.getSortingFunction = (type => {
    switch (type) {
    case "string":
      return (a, b) => a.localeCompare(b);
    case "number":
      return this.sortingItems;
    default:
      throw `Unsupported sorting type ${type}`;
    }
  });

  this.compareElements = ((a, b) => {
    return this.getSortingFunction(typeof a)(a, b);
  });


  const thead = `<thead><tr>${header}</tr></thead>`;
  this.createTable = (content) => {
    this.el.innerHTML += content;
    this.body = this.el.lastElementChild;
  };
  this.createTable(thead + this.create(items));


  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    this.body.remove();
    const sortedItems = this.items.sort((firstItem, secondItem) => {
      const order = desc ? -1 : 1;
      return this.compareElements(Object.values(firstItem)[column], Object.values(secondItem)[column]) * order;
    }
    );
    this.createTable(this.create(sortedItems));
  };
}

function capitalize(x) {
  return x[0].toUpperCase() + x.slice(1, x.length);
}
