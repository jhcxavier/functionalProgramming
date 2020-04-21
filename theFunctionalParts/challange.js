// The challenge here, to make sure you really understand how the 
// map function works, is to recreate the map function. Specifically,
// what we want to create is a function called map that takes two
// arguments. The first argument is an array and the second argument
// is a function that should be applied to every element in the array.
// Your task is to recreate the map function in this way, obviously 
// without using JavaScript's built in map function. 

//the easier and normal way
// const map = (arr, func) =>{
//     let newArray = []
//     for(let i = 0; i<arr.length; i++){
//         const result = func(arr[i]);
//         newArray.push(result)
//     }
//     return newArray;
// }

//harder solution using reduce

const map=(arr, func)=>{
   return arr.reduce((acc, x)=>[
        ...acc,
        func(x)
    ], [])
}

console.log(map([1,2,3,4], x => x * 2))
console.log(map([5,6,7,8,9,10], x => -x))
console.log(map(['a','b','c','d'], x => x.toUpperCase()))