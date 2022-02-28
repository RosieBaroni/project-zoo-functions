const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = data.employees
    .find((item) => item.id === id).responsibleFor[0];

  const animals = data.species
    .find((item) => item.id === firstSpecie)
    .residents
    .sort((a, b) => a.age - b.age);

  const oldestAnimal = animals[animals.length - 1];

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
