// for Of loop

// They are array specific loop. 

const arr = [1, 2, 3, 4, 5]
for (const i of arr){    // it can be used to interate over any variables,, string, array, object. 
    console.log(i);
}

const str = 'Prashanta'
for(const i of str){
    console.log(i);
}

// for of loop in Object. 

// Maps: It is an object. 

const map = new Map()

map.set('IN', 'India') // setting key and value. 
map.set('EN', 'England')
map.set('USA', 'United State of America')

console.log(map);

for (const [key, value] of map){
    console.log(key + ' :- ' + value);
}

// second

// for Object we need to apply For In loop (Not for Of loop)

const myObject = {
    game1 : 'Football',
    game2 : 'Basketball'
}


// printing the key pair of Object: 
for (const key in myObject){
    console.log(key);
}

// If we need to print the value pair of object: 
for (const key in myObject){   // key refer to the key of object. We can use differnt name but its refer to key of an object. 
    console.log(myObject[key]); 
}


// for In loop in Array:  

const programming = ['Java', 'C++', 'Ruby', 'Python']

for (const index in programming){

    console.log(`The index of the array elements is :  ${index}.`)  // if we use a for In loop in array then, it return the keys or index of Array insted of value.
    // to get the Value of the indexes. 
    console.log(`The value of array elements is: ${programming[index]}.`)
}