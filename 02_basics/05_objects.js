const course = {
    name: 'JS in Hindi',
    price: '$999',
    courseInstructure : 'hitesh'
}

//Syntex for returning values in a bulk. We can't use the similar code to get data from same Object everytime. 

const {name, price} = course 
console.log(name, price); // retriving the values in a bulk. 
console. log(`The name of the course is ${name} and price is ${price}.`);

//or

const {name: courseName, price : priceDetail} = course // this is the simple way to give a name for price : we gave a customise name for Price as a priceDetails. 
console.log(priceDetail);
console. log(`The name of the course is ${courseName} and price is ${priceDetail}.`);



