const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species
    .find((item) => animal.includes(item.name));

  return specie.residents.every((item) => item.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
