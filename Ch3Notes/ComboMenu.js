const readline = require("readline-sync");

let menu = [
    'Chicken Sandwich: $2.50',
    'Hamburger: $1.50',
    'Curly Fries: $1.00',
    'Chicken Nuggets: $1.40',
];

console.log(`${menu}`);
let beverage = [
'Coca-Cola: $1.50',
'Pepsi: $1.00',
'orange juice: $1.00'
    'coffee'
];
console.log(`${beverage}`);
let BeverageSizes = [
    'small: $1.00',
    'medium: $2.50',
    'large: $3.00',
]
let answer = readline.question("What would you like today?");

let answer = readline.question("what beverage would you like");