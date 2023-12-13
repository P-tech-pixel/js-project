// for Each loop:

const coding = ['JS', 'Ruby', 'Java', 'Python']

// nofrmally for each execuate the function inside it's parenthesis: 
coding.forEach( function (val) {         // we declare the val variable as a each item in a coding array. 
    console.log(val);
} )

// another type of function with arrow funstion: 
coding.forEach ( (value) => {
    console.log(value);
})

// we can give execute a function from a For each loop:
// we can write a fucntion outside the for each loop code and assign a function name in for each loop:

const items = ['don', 'con', 'run']
function printItems(items){
    console.log(items);
}
//printMe(); // funtion execution

//function execution through For each loop:

items.forEach(printItems); // we are just declaring the function not executing. That why we put, printItems, instead of printItems(). 

// another array:

const names = ['Prasant', 'Mark', 'Phil']
names.forEach ((item, index, arr)=> {  // we can get all the information about the array's items : index and as well as array. 
    console.log(item, index, arr);
})


// we use the for each specially for the array with the Objects as a items. 
// Note: mainly in a Database, values comes in a way as a array with lots of Object on it. 

const myCoding = [

    {
        languageName : 'JS',
        languageFileName : 'JS File',
    }, 
    {
        languageName : 'Python',
        languageFileName : 'Python File',
    }, 
    {
        languageName : 'C++',
        languageFileName : 'C++ File',
    }

]

myCoding.forEach( (eachObjects) => {
    console.log(eachObjects.languageName);
  
})