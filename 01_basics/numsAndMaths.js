const score = 400
const balance = new Number(100)

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.8786

console.log(otherNumber.toPrecision(4)); // make the values presided only having 3 number. 

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN')); // converting the numbers on proper format using on Indian format. 

console.log(Math);

console.log(Math.abs(-4)); // chnaging the - value to +
console.log(Math.round(4.3));
console.log(Math.random()); // any random value between 0 to 1. 

console.log(Math.random()*10); // getting a random values between 0 and 10. 
console.log((Math.random()*10) + 1); // getting a random values between 1 and 10. 


//++++++++

const min = 10
const max = 20

console.log(Math.floor (Math.random()*(max - min + 1) + min)); // floor defibes the min  value when a random value picks up. 