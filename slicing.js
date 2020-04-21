const numbers = [0,1,2,3,4,5,6,7,8,9,10];

console.log(numbers.slice(3, 8))
console.log(numbers.slice().reverse())
console.log(numbers)

//  We see that we simply have a copy of the original array. 
// This is really helpful to use with built in array functions 
// that mutate the array by default. All we have to do to stop 
// JavaScript from mutating an array with these functions is to 
// call slice with no arguments, and then call the mutating 
// function after that. For example, reverse. And then if we 
// run our code again. We see that we have a reversed copy of 
// the array. In order to see that it's really not mutating our 
// original array, let's log the original array as well. We run
//  our code again. And we see that our original array remained
// intact.