const readline = require(`readline-sync`);

//q1
function nameSwapper (){
    let first =readline.question("First Name: ");
    let last =readline.question("Lase Name: ");
    return(`${last}, ${First}`);
}

let myName = nameSwapper();
console.log(myName)