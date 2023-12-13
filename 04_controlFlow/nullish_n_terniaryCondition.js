// Nullish Coalescing Operator (??) : workes on : null , Undefined

// This syntax (??), ensure and return any physical value rather than Null or Undefined for any variable. Just to be sure if the value is not null. 

let var1;
let var2;

var1 = 5 ?? 10 // if there is no Null or undefined than the value is a first element. 
var2 = null ?? 20 ?? 30 // if there is Null or undefined than the value is a element after the Null or Undefined.
var3 = undefined ?? 80 ?? 70 
console.log(var1);
console.log(var2);
console.log(var3);

// Terniary Operator: different way to execute a if else function. 

// condition ? true : false

const iceTeaPrice = 40

iceTeaPrice >= 50 ? console.log(`The ice tea is expensive. `) : console.log(`The ice tea is not expensive. `); 