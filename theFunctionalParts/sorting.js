//Before we look at how to use sort, it's very important to remember
//  that Sort is a mutating function. Which means that it actually 
//  modifies the original version of the array that it's called on.

const mixedUpNumbers = [10,2,4,3,7,5,8,9,1,6];

//ascending order

const ascending = (a, b)=>{
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}
const descending = (a, b)=>{
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
}

const sortedNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbers)