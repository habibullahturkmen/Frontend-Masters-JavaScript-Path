// Game Character Challenge Solution

let game = {};
game.murderer = "??";
game["weapons"] = [
    {type: "Guns", location: "Backyard"},
    {type: "Baseball bat", location: "Living room"},
    "Angry Cats"
];

game.name = [];
game.name[0] = "Miss Scarlet";
game.name.push("Mr. Green");

console.log(game)

/* Output

{
  murderer: '??',
  weapons: [
    { type: 'Guns', location: 'Backyard' },
    { type: 'Baseball bat', location: 'Living room' },
    'Angry Cats'
  ],
  name: [ 'Miss Scarlet', 'Mr. Green' ]
}

*/

/* Destructuring Exercise
1. Create an object that looks like this:
{"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
2. Extract out the weapon and location using destructuring
*/

// Solution

const Soldier = {
    "name": "Rusty",
    "room":"kitchen",
    "weapon":"candlestick"
};

let { weapon, room } = Soldier;

console.log("Weapon: " + weapon, "\nLocation: " + room);

/* Output

Weapon: candlestick
Location: kitchen

*/