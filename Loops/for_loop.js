// for Loop:

for ( let i = 0; i <= 10; i++ ){
      const element = i;
      console.log(element);
}


// Nested for Loop: 
for ( let i = 0; i <= 10; i++ ){
    console.log(`Outer Loop value: ${i} `);
    for ( let a = 0; a <= 10; a++ ){
        console.log(`Outer Loop value: ${i}  and inner value is: ${a}.`);
    }
}


// Multiplication by Loop. 
for ( let i = 1; i <= 10; i++ ){
    console.log(`Outer Loop value: ${i} `);
    for ( let a = 1; a <= 10; a++ ){
        // console.log(`Outer Loop value: ${i}  and inner value is: ${a}.`);
        console.log(i + ' * ' + a + ' = ' + i*a );
    }
}

// On arrays: 

let myArray = ['Flash', 'Batman', 'Superman']

for (let index = 0; index < myArray.length; index++){
    console.log(myArray[index]); // executing the array values. 
}

// key words:

// break:

for (let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`)
        break;    // it stops the loop when the condition is detected. 
    }
    console.log(`Value of i is ${index}`); 
}


// continue: 

for (let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`)
        continue;  // it skips the condition and continue the loop. 
    }
    console.log(`Value of i is ${index}`); 
}







