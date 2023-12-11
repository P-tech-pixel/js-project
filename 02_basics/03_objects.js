// Methods of defining the Objects 

// singleton
// object leterals (Constructor)


// Here we are discussing the Object Sington: 

const mySymbol = Symbol('key1')


const JsUser = {
    name : 'Prashanta', // NOTE: all the key for Objects are registered as a String : we can delclare the key value pair as a 'name': 'Prashanta'.
    age : 26,
    location : 'canberra',
    email : 'p.pandit@brumbies.com.au', 
    [mySymbol]: 'myKey1', // best way to represent a Symbol variable in Objcet. 
    isLoggedIn : false, 
    lastLoginDays : ['Monday', 'Saturday']
}

//accessing the Object
//console.log(JsUser.email);
console.log(JsUser['email']); // this is the best way to get access to Object Values. While retriving the value, we need to add key as a String.

console.log(JsUser[mySymbol]);
console.log(typeof JsUser[mySymbol]); // identify the type of the retriving value. 


//basics infor about Object:

JsUser.email = 'prashanta.panditt@secureinn.com.au' // Changing the value of email.
console.log(JsUser); // accessing the modified Object. 

// Object.freeze(JsUser); // this will lock or freeze the value oof Object. 

//declaring a funtion in JS Object. 

JsUser.greeting = function(){
    console.log('Hello JS USER')
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS USER: ${this.name}`); // .this role. 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
