//create an object of key-value pairs

let contacts = {

    bff: 1234567,
    mom: 5555555,
    bro: 1592467

}

//log all

console.log(contacts);

//access a specific entry by its key (name)

console.log(contacts.bff);
//can't access if the key doesn't exist

console.log(contacts.myself);
//add a new entry

contacts.sis = 3456677;
console.log(contacts.sis);
//update an entry

contacts.bff = 1111111;
console.log(contacts)
//delete an entry

delete contacts.mom;
console.log(contacts);

//is there a key called __ in//there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following

let a = {
    value:20

};
let b = a;
let c = {
    value:20

};

//numbers are passed by value, not by reference. Similar for strings and booleans.
//create 5 objects below:

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: "Medium",
    barks: true
    }
    console.log(dog)

let cat = {
    catName: `juania`,
    breed: `bengal Cat`,
    age: 1,
    size: "small",
    barks: false
}
let dog2 = {
    dogName: `Fusion`,
    breed: `Austrilan catter dog`,
    age: 4,
    size: `medium`,
    barks: true
}
let dog3 = {
    dogName: `Howard`,
    breed: `German Sherpard`,
    age: 5,
    size: `large`,
    barks: true
}
let dog4 = {
    dogName:`Juan`,
    breed: `Great Dane`,
    age: 8,
    size: `large`,
    barks: true
}
