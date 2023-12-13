// if and else

const isUserLoggedIn = false

if(isUserLoggedIn){   // this condition is always true. We don't have to declare the value true or false. 
   console.log(`Hello User `)
}
else{        
    console.log(`Error: User Missing !`)
}

/*

several operator types:

== : evaluates the value is equal.
=== : evalauates the value as well as data type. 

*/

if( 2 == '2' ){
    console.log(`Both the values are equal. `);
}

// data typoe and value check
if (3 === '3'){
    console.log(`Humm..... `);
} else {
    console.log(`Both the values & are data type is not equal. `);
}

// negative data type and value check. 
if (3 !== '3'){
    console.log(`Both the values & are data type is not equal. `);
} else {
    console.log(`Humm..... `);
}

// scope related: 

const score =  200

if(score > 100){
    let power = 'fly'
    console.log(`User power: ${power}`);
}


const balance = 1000

if(balance > 500) console.log('test');  // this called implicite condition 



// 
 /* && : when all the condition should be true.
    || : when one of the condition should be true.

*/



















