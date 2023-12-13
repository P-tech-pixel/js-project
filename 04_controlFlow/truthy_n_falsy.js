const userEmail = 'p@gmail.com'

if (userEmail){                              // by default If the variable have a value then it execute as a true. 
    console.log(`Got the user email.`)
} else{                                      // if no value, it executes as a false. if UserEmail = '' . 
    console.log(`Don't have the user email. `)
}

// list of falsy values: false, 0, -0, BigInt, 0n, "", null, undefined, NaN 
// list of truthy values: true, '0' (Zero inside String), 'false', " " , [], {}, function(){} (empty function), 

if (userEmail.length === 0){
    console.log("Array is Empty. ");
} else {
    console.log('Array is not Empty. ')
}

// If the Object is empty:

const emptyObj = {}

if(emptyObj) {
    console.log('Object is Empty. ') // True condition executed when the Object is empty. 
}







