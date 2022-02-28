const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = (entrants.filter((item) => item.age < 18)).length;
  const adult = (entrants.filter((item) => item.age >= 18 && item.age < 50)).length;
  const senior = (entrants.filter((item) => item.age >= 50)).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrants);
  const totalPrice = (child * prices.child + adult * prices.adult + senior * prices.senior);

  return +totalPrice.toFixed(2);
}

// const entrants = [
//   { name: 'Rose', age: 5 },
//   { name: 'Rose', age: 5 },
//   { name: 'Rose', age: 5 },
//   { name: 'Rose', age: 18 },
//   { name: 'Rose', age: 18 },
//   { name: 'Rose', age: 50 },
// ];
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
/** Source:
 * https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary (arredondar para no máximo 2 casas decimais .toFixed(2))
 * Monitoria Thalles. OBS: 'Object.keys(entrants)' retorna uma array com as chaves do objeto, usando o '.length' retorna o tamanho do array, se for igual 0 (falso).
*/

module.exports = { calculateEntry, countEntrants };
