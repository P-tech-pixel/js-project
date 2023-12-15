const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNum.map((num) => {
   return num + 10
})
console.log(newNums); 

// channing methods in a JS:

const numbers = [1,2,3,4,5,6,7,8]

const myNewNumbers = numbers
                     .map((num) => { return num*10}) // if we do the channing of the methods, then the variable values will be chnaged according to the method it passes. The value of num is multiplied by 10. 
                     .map((num) => {return num + 1}) // the value of num is first muntiplied and added by 1. 
                     .filter((num) => num >=40)


console.log(myNewNumbers);

