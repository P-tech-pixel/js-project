//Immediately Invoked Function Expression (IIFE)

// For the imideate excution of a Funtion. Sometime, the values from Global pollute the function. 

// EEFE can be declared by a ()()

(function chai(){  // It's called Named iffe.
    console.log(`DB CONNECTED`)
})();

( () => {        // It is called Simple iife.
    console.log(`DB CONNECTED 2`)
})();

// IFFE with parameters:
( (name) => {        
    console.log(`DB CONNECTED 2 BY ${name}`)
})('Prashanta Pandit');

// How do Java Script Execute Code: reference: https://youtu.be/ByhtOgF6uYM?si=OXUGeR2X-DD4tdts

/* Phase of Code execution in JS.

1. Global execution: allocated on .this keyword. 

2. Memory creation phase: allocate all the memory for the variables. The value of the variables are allocated as Undefined. In this phase, functions
    value is allocated as a defination. 

3. Execution phase: 
   This phase, all the variables values are executed according to their variable types. 
   Once, the function get executed the memory is not saved. 

*/

