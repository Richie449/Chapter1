const readline = require('readline-sync');
1


 let answer = readline.question("Do you want to here a joke ?\nYour answer: ");
 console.log(answer);
 if (answer == "yes") {
     console.log(`do you have games on your phone?`);
 }
2 and 3


 let number = readline.question('give me any number of your choice \nyour answer: ');
 if (number % 2 == 0) {
     console.log("your number is divisible by 2");
 }else {
     console.log("its not divisible by 2");
 }
 console.log("end of program");

 if (number % 3 == 0) {
//     console.log("your number is divisible by 2");
// }else {
//     console.log("its not divisible by 2");
// }
// console.log("end of program");
//
// if (number % 4 == 0) {
//     console.log("your number is divisible by 2");
// }else {
//     console.log("its not divisible by 2");
// }
// console.log("end of program");
//
// if (number % 5 == 0) {
//     console.log("your number is divisible by 2");
// }else {
//     console.log("its not divisible by 2");
// }
// console.log("end of program");
//
// if (number % 6 == 0) {
//     console.log("your number is divisible by 2");
// }else {
//     console.log("its not divisible by 2");
// }
// console.log("end of program");
//4

// let guess = readline.question('Try to guess tmy secret number \nyour answer: ');
// let number = 16
// if (guess == 16) {
//     console.log("your correct")
// }if (guess > 16){
//     console.log("try lower")
// }if (guess < 16){
//     console.log("try higher")
// }
// console.log("end of program")
//5 and 6


//5 and 6
// let cost = Number(readLine.question("Enter cost: "));
// if (cost <= 0){
//     console.log("invalid");
// } else {
//     let tax = cost * .08;
//     let newTotal = cost + tax;
//     console.log(`Your bill is $${newTotal.toFixed(2)}`);
// }
//7 and 8
// let mealCost = Number(readLine.question("Enter cost: "));
// if (mealCost <= 0){
//     console.log("invalid")
// } else {
//     let service = readLine.question("How was the service? (great/good/average) : ");
//     let tip = 0;
//     if (service == "great") {
//         tip = mealCost * .20;
//     } else if (service == "good") {
//         tip = mealCost * .15;
     } else if (service == "average") {
         tip = mealCost * .10;
     }
     let totalBill = cost + tip;
     console.log(`The total bill should be $${totalBill.toFixed(2)}`);
 }