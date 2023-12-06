const name = "Prashanta-PC"
const repoCount = 67

console.log(`My name is ${name} and my repo Count is ${repoCount}. `) // new way of concadinating the String. 

console.log(typeof name);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(4)); // check the index of the charater. 
console.log(name.indexOf('t'));

// Slicing the String:

const newString = name.substring(0,5); // diving the String from index 0 to 5. 
console.log(newString);


const anotherString = name.slice(0,4);
console.log(anotherString);


//Methods in Strings:

const newString1 = "     Sanjita   "
console.log(newString1);
console.log(newString1.trim()); // trimming the extra spaceses in String. 

const url = "https://heppo.com/brumbies%20by"

console.log(url.replace('%20', 'rug')); // replacing the special characters in Strings. 





