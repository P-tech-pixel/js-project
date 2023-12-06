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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Memory Types : Stack and Heap

On Primitive data types Stack memory is used. When a variable which already have a value  is assigned a new value, on Stack memory, it's copy is created. 

Example: 
*/

let user01 = "Prashanta"
let user02 = user01

user02 = "Sanjita"

console.log(user02); // user02 value is Sanjita
console.log(user01); // user01 value is Prashanta 

// On Non-primitive data types Heap memory is used. On Primitive data types Stack memory is used. When a variable which already have a value  is assigned a new value, on Heap memory, it's value is changed to the latest one. 

let brumUser01 = {
    name: "Mark", 
    email: "m.grieb@brumbies.com.au"
}

let brumUser02 = brumUser01

brumUser02.email = "gribby@brumbies.com.au" // changing the value of email.

console.log(brumUser01); // the value of the variable in Non-primitive data type is change to new one. 
console.log(brumUser02); 







