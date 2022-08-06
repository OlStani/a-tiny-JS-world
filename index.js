const dog = {
   name: 'Bob',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'woof!'
}

const cat = {
   name: 'Kitty',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'meow!'
}

const woman = {
   name: 'Sara',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hello!'
}

const catWoman = {
   name: 'Bella',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: `${cat.saying}`
}

const man = {
   name: 'Mario',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Hi!',
   friends:['Bob','Tom','Eva']
}

const inhabitants = [cat, dog, woman, catWoman, man]

// const inhabitantsKeys = [
//    "name",
//    "gender",
//    "legs",
//    "hands",
//    "saying",
//    "friends"
// ];

// inhabitants.forEach(inhabitant => print(inhabitantsKeys.map(key => inhabitant[key]).join(';')))

const inhabitantsInformation = inhabitants.map(({name, gender, legs, hands, saying, friends}) => [name, gender, legs, hands, saying, friends].join(';'))

inhabitantsInformation.forEach(inhabitant => print(inhabitant))
