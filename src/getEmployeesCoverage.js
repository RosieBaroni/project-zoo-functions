const data = require('../data/zoo_data');

// Constantes usadas em mais de uma função;
const { employees } = data;
const { species } = data;

// Função que retorna todos os funcionários.
function getAllEmployees() {
  return employees
    .map((item) => ({
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: item.responsibleFor.map((element) =>
        species.find(({ id }) => id === element).name),
      locations: item.responsibleFor.map((animalId) =>
        species.find(({ id }) => id === animalId).location),
    }));
}

// Função que retorna o funcinários caso o parâmetro seja o id, firstName ou lastName.
function getEmployee(employee) {
  const allEmployees = getAllEmployees();
  const employeeData = allEmployees
    .find((item) => item.fullName.includes(employee.name) || item.id === employee.id);

  if (!employeeData) {
    throw new Error('Informações inválidas');
  }

  return employeeData;
}

// Função que chama a função getEmployee ou a getAllEmployees de acordo com o parâmetro passado.
function getEmployeesCoverage(employee) {
  if (employee && (employee.name || employee.id)) {
    return getEmployee(employee);
  }

  return getAllEmployees();
}

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Dylan' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: '234' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
