// Switch case statement:

const month = 3
switch (month){
    case 1: 
        console.log('January') ;
        break;  // break breaks the condition after a match. If there is no break, then it execute everything after the match confirmed and after that  no matter the value is false. 
    case 2:
        console.log('Febuary');
        break;
    case 3:
        console.log('March');
        break;
        
    default: 
        console.log('No match !');
        break;
}