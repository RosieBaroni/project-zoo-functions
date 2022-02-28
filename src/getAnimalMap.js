const data = require('../data/zoo_data');

// Função que retorna animais categorizados por localização.
function animalsByLocation(species) {
  return species
    .reduce((accumulator, item) => {
      let items = [];

      if (accumulator[item.location]) {
        items = accumulator[item.location];
      }

      return {
        ...accumulator,
        [item.location]: [...items, item.name],
      };
    }, {});
}

// Função que retorna animais categorizados por localização e faz um map dos residents para listar os seus nomes.
// Verifica se possui sexo como parâmetro, caso tenha, faz um filter do sexo.
// Verifica se possui sorted como parâmetro, caso tenha, faz um sort() no residents final.
function getAnimalNames(species, { sex, sorted }) {
  return species
    .reduce((accumulator, item) => {
      let items = [];

      if (accumulator[item.location]) {
        items = accumulator[item.location];
      }

      let residents = sex
        ? item.residents.filter((element) => element.sex === sex) : item.residents;

      residents = residents.map(({ name }) => name);

      return {
        ...accumulator,
        [item.location]: [...items, { [item.name]: sorted ? residents.sort() : residents }],
      };
    }, {});
}

// Função que chama a primeira ou segunda função de acordo com o parâmetro passado.
function getAnimalMap(options) {
  if (options && options.includeNames) {
    return getAnimalNames(data.species, options);
  }

  return animalsByLocation(data.species);
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(JSON.stringify(getAnimalMap({ includeNames: true })));
// console.log(JSON.stringify(getAnimalMap({ includeNames: true, sorted: true })));
// console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female' })));
// console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female', sorted: true })));

module.exports = getAnimalMap;
