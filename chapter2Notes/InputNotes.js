const readline = require('readline-sync');

let answer = readline.question("what day is it?\nYour answer: ");
console.log(answer);

let username = readline.question("enter username: ");
let password = readline.question("enter password: ");
if (password == "abc"){
    console.log(`Welcome ${username}`);
}else{
    console.log("invalid");
}

let currentPrice = readline.question("enter current price");
let originalPrice = readline.question("Enter original price");
let diff = originalPrice - currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

//Exponets
let base = Number(readline.question("enter the base");
let exp = Number(readline.question("enter the exponent:");
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} = ${answer2}`);

//Rounding
console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3)
console.log(Math.round(5.3));
console.log(-5.3)
console.log(Math.round(-5.3));

//other Rounding Methods
console.log(Math.floor(3.5)); //floor always rounds down
console.log(math.ceil(3.5)); //ceil(ing) always rounds up