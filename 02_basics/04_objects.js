// let's disccuss the Literal Object defining , we can call it as a Construction:

// we can defind object by 2 methods: 
// const tinderUser = new Object() // This is singleton Object.
const tinderUser = {} // this is a non-singleton Object.


// adding values in a Object:

tinderUser.id = 'x345'
tinderUser.name = 'Mark Grieb'
tinderUser.isLoggedIn = true

console.log(tinderUser);

console.log(`Object Users keys identification: ${Object.keys(tinderUser)}`)
console.log(Object.keys(tinderUser)); // identifying the keys of Object type: tinderUser. 

// declaring Object as a value,  inside the Object

const another_tinderUser = {
    email: 'prashanta@gmail.com',
    fullname: {
        userFullName: {
            firstName: 'Prashanta',
            lastName: 'Pandit'
        }
    }
}

console.log(another_tinderUser.fullname.userFullName);

const obj1 ={
    1: 'a',
    2: 'b'
}

const obj2 ={
    3: 'c',
    4: 'd'
}

// add a 2 objects:
// 3 ways of adding objcets: 

const obj3 = {obj1, obj2} /// creates a Object inside object.
console.log(obj3);

// proper way of adding user:
const Obj4 = Object.assign({},obj1, obj2) //creates a new object with a 2 object values. {} is a target parameter, as we are returning a new object. We can use: const Obj4 = Object.assign(obj1, obj2) as well. 
console.log(Obj4); 


// or, we can simply add a spread method.

const object5 = {...obj1,...obj2}
console.log(object5);


// values from Database:
// in db, a value comes through array:

//let users be a data from BD:

const users = [
    {
      id : 1, 
      email: 'nangel@gmail.com'  
    },
    {
        id : 2, 
        email: 'changel@gmail.com'  
      },
      {
        id : 3, 
        email: 'tangel@gmail.com'  
      }
]

console.log(users[1].email); // index 1 and email. Since, the database users are collected as a array of Objects, in JSON format. 






