/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.filter(elem => elem.age <= age)
    .map(elem => `${elem.name}, ${elem.balance}`)
    .join("\n");
}
