// Global nnd Local Scope:

// Curly braces {} is Scope. 
/*
   We have two types of Scope: 

   1. Block scope: It is a scope inside if and else: 
      if (true) {
           let a = 10,    /// Note: if we declare the variable with let and const then , it's scope is inside the {}. 
           const b = 20, 
           var c = 40,   // But, if we declare the variable with var & nothing, it's scope is outside the {} as well. Normally, we don't use var in a bloack scope.
           d = 50
      }


  2. Global Scope: if we declare the variable outside the block defined above. that it is considered as a block scope. 
*/ 

if (true){
    const userName = 'Prashanta'
    if(userName === 'Prashanta'){
        const website = 'Brumbies.com.au '
        console.log(website + userName)
    }
    //console.log(website);
}
//console.log(userName);

//++++++++++++++++++++++ Intresting ++++++++++++++++++

function addOne(num){
     return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)

