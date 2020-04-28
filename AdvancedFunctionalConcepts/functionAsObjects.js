const sayHello =()=> console.log('Hello')
console.log(sayHello.name)

const add =(x,y,z)=> x + y + z;
console.log(add.length)
//  if we say add.toString, and print it, and then run
//  our code again, we see that it prints a string representation of our function.
console.log(add.toString())

//Call, Apply and Bind

//  Now in functional programming, we'll only use the this keyword inside functions 
// very rarely, so we usually just end up passing null in for the first argument, 
// and the rest of the arguments that we pass to call will be passed to our function 
// and the result will be returned. So if we say one, two, and three, and run our code,
//  we see that call simply calls our add function with the arguments one, two, and three. 

console.log(add.call(null, 1,2,3))

//Apply
//The first argument again this will just be null. And then we can pass in our arguments
//as an array. We'll pass in one, two, and three, and if we run our code, we see that we 
// get the same result. Now in reality, we'll rarely use either of these functions in our code. 

console.log(add.apply(null, [1,2,3]))

//Bind
// This partially applies our function so that we can do stuff like this, const add1 equals
// add.bind, null for the first argument, and we'll fix the first argument of our add function
//to one, and then we can simply call add1 with the remaining two arguments, and if we run our
// code, again we get the same result. 
const add1 = add.bind(null, 1)
console.log(add1(2,3))