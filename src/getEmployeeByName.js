const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees
    .find((item) =>
      employeeName.includes(item.firstName) || employeeName.includes(item.lastName));
}

// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
