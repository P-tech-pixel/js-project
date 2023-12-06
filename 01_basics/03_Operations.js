//*************** OPERATIONS ***************************************

let value = 3
let negValue = -value

console.log(negValue);

console.log(+true);

// ********* prefix and postfix *****

let num = 3

console.log(++num); // this returns the value after the increment happens... expected result: 4

let num2 = 2

console.log(num2++); // this returns the value before the increment happens... expected result: 2

// But, if i write the following code: 

console.log(num2); // this will display the value of num2 as 3, as it has already been increased the value by 1. 
