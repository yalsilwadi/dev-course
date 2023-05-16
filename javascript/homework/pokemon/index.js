// Your initial data here
// Write your code below data.

let data = {
    abilities: [
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 64,
    forms: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
      },
    ],
    height: 7,
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
    moves: [
      {
        move: {
          name: 'razor-wind',
          url: 'https://pokeapi.co/api/v2/move/13/',
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'egg',
              url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
            },
            version_group: {
              name: 'crystal',
              url: 'https://pokeapi.co/api/v2/version-group/4/',
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'egg',
              url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
            },
            version_group: {
              name: 'gold-silver',
              url: 'https://pokeapi.co/api/v2/version-group/3/',
            },
          },
        ],
      },
    ],
  
    name: 'bulbasaur',
    order: 1,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
    ],
    types: [
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    weight: 69,
  };

  // Challenege 1:
const height = data.height;
const weight = data.weight;
const result = `Height: ${height}, Weight: ${weight}`;
console.log(result);

// Challenge 2:

const heightInt = parseInt(data.height);
const weightInt = parseInt(data.weight);
const bmi = weightInt / ((heightInt / 100) ** 2); // Convert height to meters
console.log(bmi);

// Challenge 3:

const pokeName = data.name;
const nameLength = pokeName.length;
const upperCaseName = pokeName.toUpperCase();
console.log({ nameLength, upperCaseName });

// Challenge 4:

const hasBulba = data.name.includes("bulba");
console.log(hasBulba);

// Challenge 5:

const firstLetters = data.name.substring(0,2);
const endLetters = data.name.substring(data.name.length - 2);
const newName = firstLetters + endLetters;
console.log(newName);

// Challenge 6:

const nameArray = [newName];
console.log(nameArray);

// Challenge 7:

data.types.forEach(type =>{
    console.log(type.name);
});

// Challenge 8:

const isArray = Array.isArray(data.abilities);
console.log(isArray);

// Challenge 9:

const lastAbility = data.abilities[data.abilities.length - 1].name;
console.log(lastAbility);

// Challenge 10:

const lastAbilityObject = data.abilities.pop();
data.abilities.push(lastAbilityObject);

// Challenge 11:

for(const stat of data.stats){
    console.log(stat.base_stat);
}

// Challenge 12:

const filteredStats = data.stats.filter((stat) => stat.base_stat > 47);
console.log(filteredStats);

// Challenge 13:

const reversedStats = data.stats.map((stat) => stat.base_stat).reverse();
const combinedStats = reversedStats.join("");
console.log(combinedStats);

// Challenge 14:

const firstTwoStats = data.stats.map((stat) => stat.base_stat).slice(0, 2);
console.log(firstTwoStats);

// Challenge 15:

data.stats[0].base_stat = "Yasser Alsilwadi";

// Challenge 16:

Object.entries(data).forEach(([key, value]) => {
    console.log(key, value);
  });

// Challenge 17:

const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const name = data.name;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;