// New type of Function declaration and This key word.

// This key refers to the current context of the block. 

const user = {
    userName: 'hitesh',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website. `)
    }
}

user.welcomeMessage()

// arrow function: 

const chai =  (num1, num2 ) => {
    return num1 + num2
}
console.log(chai(2, 3))

// but if we are running a function with a single return: We can write this code like below as well : This is called implicite return. If we add a {} then its a explicite return. 

const chai1 =  (num1, num2 ) => num1 + num2
console.log(chai1(2, 3))

const chai2 =  (num1, num2 ) => (num1 + num2)   // It's a same thing. 
console.log(chai2(2, 3))

// for returning object using the implicite return method. 

const myObject = () => ({userName: 'hitesh'})


