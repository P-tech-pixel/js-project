const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

//push method
marvel_heros.push(dc_heros) 

console.log(marvel_heros); // when we push array with another  array, then array gets in the last index of array as a single array. 

console.log(marvel_heros [3][1]); // indexing the 'flash'

//concat method

const word1 = ['a','b','c','d','e']
const word2 = ['A','B','C','D','E']

const allWords = word1.concat(word2); // concat creates a new array. 
console.log(allWords); 

//spread method
const all_new_words = [...word1,...word2] // we use this method noramlly, if we want to add more than 1 arrays together (e.g: [...word1,...word2, ...word3])
console.log(allWords);

//

console.log(Array.isArray("Prashanta")); //ask ??

console.log(Array.from('Prashanta')); // convert the string into array









