const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];

  return data.species.filter((item) => ids.includes(item.id));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
/**  Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */

module.exports = getSpeciesByIds;
