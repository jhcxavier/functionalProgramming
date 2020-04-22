const add=(x,y,z)=> x + y + z;
// if we wanted to fix one of these arguments to a certain number,
// so that we only had to pass in the other two arguments later on. 

const addPartial= x => (y, z) => add(x, y, z);

const add5 = addPartial(5);
// if we wanted to fix one of these arguments to a certain number, 
// so that we only had to pass in the other two arguments later on. 

// if we wanted to fix one of these arguments to a certain number, 
// so that we only had to pass in the other two arguments later on. 
const sum = add5(6, 7)

// if we wanted to fix one of these arguments to a certain number,
//  so that we only had to pass in the other two arguments later on. 
// console.log(sum)


// In reality, we can really divide up our arguments however we want.
// For example, we can partially apply the first two arguments and 
// leave the last one for later, and that'll look like this. 

const addPartial2 = (x, y)=> z => add(x, y, z);

const add5and6 = addPartial2(5, 6);

const sum2 = add5and6(7);

// console.log(sum2)

// In reality, we can really divide up our arguments however we want. For 
// example, we can partially apply the first two arguments and leave the 
// last one for later, and that'll look like this. 

const addPartial3 = x =>
    y =>
        z => (x, y, z);

const addFive = addPartial3(5);
const addFiveAndSix = addFive(6);
const sum3 = add5and6(7)

console.log(sum)

// Now this sort of partial application where we pass in our arguments one at
// a time has a special name, and this is called currying. 