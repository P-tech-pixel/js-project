/* Primitive datatypes and Non-premitive (Reference) datatypes

1. Primitive has 7 types:

String, Number, Boolean, null(Empty no value), undefined (has not decided what typess of variable goes in), Symbol, BigInt (number with big values), 

*/

//we can define variable as a undefined by 2 ways

var email = undefined
var email;


// symbolm can be used for a variable whoes value is sup[pose to be same but, we don't want themm to be as a same value. see example below: 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // we are expecting to return False. 

// now, BigInt

const bigNumber = 1234544555n
console.log(bigNumber);

/*

2. Non-primitive datatypes: 

Array, Objects, Functions

Note: the object type of non- primitive is called Object types. 
**Arrays

const heros = [saktiman, doga, krish]

**Object

let myObj = {
    name: "Prashanta",
    age: 25
}

**Function

const myFunction = function() {

    console.log("Hello World");

}

*/




