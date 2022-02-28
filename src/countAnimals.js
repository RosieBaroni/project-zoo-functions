const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((accumulator, item) => ({
      ...accumulator,
      [item.name]: item.residents.length,
    }), {});
  }

  const selectedSpecie = data.species
    .find((item) => item.name.includes(animal.specie));

  if (animal.specie && !animal.sex) {
    return selectedSpecie.residents.length;
  }

  return selectedSpecie.residents
    .filter((item) => item.sex === animal.sex).length;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
