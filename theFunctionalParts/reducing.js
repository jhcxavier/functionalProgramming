//Essentially, what reduce does is starts with an initial value,
// say zero, and for each element in the array, it modifies its 
// initial value in some way until after we've processed all our
// elements. We end up with the result.

const numbers = [2,7,2,40,23,24,8,4,11];

//find the sum of elements
const sum = numbers.reduce((acc, x)=>{
    console.log(`acc is ${acc}`)
    console.log(`x is ${x}`)
    return acc + x;
}, 0)

// finc the product of the elements
const multiply = numbers.reduce((acc, x)=>{
    console.log(`acc is ${acc}`)
    console.log(`x is ${x}`)
    return acc * x;
}, 1)

console.log(multiply)