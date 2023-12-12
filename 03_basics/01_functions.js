// functions

function calculateCartPrice(price ){
      return price
}

console.log(calculateCartPrice(200));

// if more values: 

function calculateCartPrice(...price ){
    return price
}

console.log(calculateCartPrice(200, 200, 490, 367)); // this made dats in array. 


// working with Function in Object: 
const user = {
    userName: 'Prashanta',
    price: 199
}

function handleObject(anyObject){
    console.log(`User's name is ${anyObject.userName}, and the price of his item is $${anyObject.price}. `);
}

handleObject(user) // call the function

// working with Function with Array: 

const myNewArray = [200, 400, 600]

function returnSecondValue(getTheArray){
    return getTheArray[1]
}

console.log(returnSecondValue(myNewArray));



