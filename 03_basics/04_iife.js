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


