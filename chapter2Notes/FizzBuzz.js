const readline = require('readline-sync');
//fizzbuzz
for (let x = 1; x <= 100; x++ ) {
    if (x % 3 == 0) {
        console.log("fizz");
    }
    else {
        console.log(x)
    }
}for (let y = 1; y <= 100; y++ )  {
    if (y % 5 == 0) {
        console.log("buzz");
    }
    else {
        console.log(y)
    }
}for (let z = 1; z <= 100; z++ )  {
    if (z % 15 == 0) {
        console.log("fizzbuzz");
    }
    else {
        console.log(z)
    }
}