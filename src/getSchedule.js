const data = require('../data/zoo_data');

// Constantes usadas em mais de uma função;
const days = Object.keys(data.hours);
const { species } = data;
const animals = species.map((animal) => animal.name);

// Função que disponibiliza as informações de horário e dia que os animais estão disponíveis,
// faz um reduce nos dias criando as novas chaves, sendo (item = day).
function animalsAvailability() {
  const availability = days.reduce((accumulator, item) => ({
    ...accumulator,
    [item]: {
      officeHour: `Open from ${data.hours[item].open}am until ${data.hours[item].close}pm`,
      exhibition: species
        .filter((specie) => specie.availability.includes(item))
        .map(({ name }) => name),
    },
  }), {});

  availability.Monday.exhibition = 'The zoo will be closed!';
  availability.Monday.officeHour = 'CLOSED';

  return availability;
}

// Função que retorna as informações do dia que passei como parâmetro.
function getDayInformation(day) {
  const weekDay = animalsAvailability();

  if (days.includes(day)) {
    return { [day]: weekDay[day] };
  }
}

// Função que retorna um array com os dias em que o animal que passei como parâmetro está em exibição.
function getAnimalInformation(animal) {
  return species
    .find((item) => item.name.includes(animal)).availability;
}

// Função que chama a primeira, segunda ou terceira função de acordo com o parâmetro passado.
function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return getDayInformation(scheduleTarget);
  }

  if (animals.includes(scheduleTarget)) {
    return getAnimalInformation(scheduleTarget);
  }

  return animalsAvailability();
}

// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('penguins'));

module.exports = getSchedule;
