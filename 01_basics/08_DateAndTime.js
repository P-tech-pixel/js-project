
 let myDate = new Date()
 console.log(myDate);

 console.log(myDate.toString()); // proper format of Date

 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());

 let myCreatedDate = new Date(2023, 0, 23); // create a custom date !
 console.log(myCreatedDate.toDateString());

let myDateString = `Today's date is ${myDate.toDateString()}. `
console.log(myDateString);






