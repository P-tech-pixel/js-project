const accountId = 144567
let accountEmail = "prasant@gmail.com" 
var accountPassword = "123456"
let accounState = "Australian Capital Territory"
accountCity = "Canberra" // never use thius kind of variables . 

accountEmail= "prashanta@brumbies.com.au"

console.log(accountEmail);

/* 

Prefer not to use var, 

because of issue on scope and functional scope. 



*/

console.table([accountEmail, accountId, accountPassword, accountCity, accounState]); // to execute the JS file: node 01_basics/01_variables.js