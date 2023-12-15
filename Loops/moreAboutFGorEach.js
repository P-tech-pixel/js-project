// more about FOr each loop: 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.filter( (num) => {   // filter keyword works as  a foreach loop. 
   return num > 4                            // when you are using scope {}, then we have to use a return keyword. 
})

console.log(newNums);

// Filer keywords:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let filteredBook = books.filter( (bookItem) => {
    if(bookItem.genre === 'History'){
       console.log(bookItem);
    }
})

// or, we can filter out with differnet method:
// we can use a same variable filteredBooks, like below: this is called overidding varibles. 
filteredBook = books.filter((bookItem) => { 
    return bookItem.publish >= 2000; 
})
console.log(filteredBook);

// filter books with 2 requirements: 
filteredBook = books.filter((bookItem) => { 
    return  bookItem.publish >= 1995 && bookItem.genre === 'History'
})
console.log(filteredBook);






