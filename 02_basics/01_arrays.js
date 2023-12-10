//arrays

const myArr = [0,1,2,3,4,5]

const newArray = new Array(1, 3, 6, 7, 9)

//Arrays methods, 

newArray .push(6) // adding A element in Array
console.log(newArray);

newArray.pop() // removing the last times in Array

console.log(`Does 9 exist on the above array value ? : ${newArray.includes(9)}`);

const myNewArray = newArray.join(); //joining the elements of Array

// slice , splice

console.log("A", newArray);

const myn1 = newArray.slice(1,3); // slice the array including the index 1 value but not 3. And, this make a new array to newArray without the selected portion. 

console.log(myn1);

const myn2 = newArray.splice(1,3); // slice the array including the index 1 value & 3. 

console.log(myn2);










 