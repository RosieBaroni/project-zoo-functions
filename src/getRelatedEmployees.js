const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((item) => item.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees
    .filter((item) => item.managers.includes(managerId))
    .map((object) => `${object.firstName} ${object.lastName}`);
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// try {
//   console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// } catch (error) {
//   console.error(error.message);
// }
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some */

module.exports = { isManager, getRelatedEmployees };
