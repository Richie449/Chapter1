//


//Example 1: Without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();
printYes();

//example 2: With Parameter
function printtext(text){
    console.log(text)
}

printtext("happy Thursday!");
printtext("Tomorrow is Friday");

//Return statements provide values to me rest of program
//Returned values cam be used ny other parts of the code
//console.log does not return values for tje rest of your code

//Example 3: Without return
function double (n){
    console.log(n*2);
}

double(21)
double(911)
double(66)

//example 4: With Return
function triple (n){
    return(n*3);
}

let lives = triple(3);
lives-=1;
lives+=2;
console.log(lives);

console.log(triple(2));

//Scope is the part of the program where the binding (value of
// a variable) is visible.
//Global scope: created outside {}, accesible everywhere
//local scope: created inside specific {}, accessible only there

//Example 5: Different Scopes
let x=10; //global X
if (x>1){
    let y=20; // local y
    let z=30;//local z
    console.log(x+y+z);
}
console.log(x)(x+y+z); //y and z are not accessible outside the {}

//Example 6: No Naming Conflict
function half(n){
    return (n/2)
}
let n=10;
console.log(half(100));
console.log(n)