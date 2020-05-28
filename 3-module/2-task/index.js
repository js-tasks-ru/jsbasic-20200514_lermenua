/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{}}  объект
 */
function getMinMax(str) {
  let result = str.split(/\s|,/)
    .map(elem => parseFloat(elem))
    .filter(elem => !isNaN(elem));
  let min;
  let max;
  {
    min = Math.min(...result);
    max = Math.max(...result);
  }
  return {min, max};

}
