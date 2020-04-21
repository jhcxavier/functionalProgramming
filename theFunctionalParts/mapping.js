const number = [1,2,3,4,5]

// const  doubledNumbers = []

// for(let i in doubledNumbers){
//     doubledNumbers.push(doubledNumbers[i] * 2)
// }

const double = x => x *2;

const doubledNumbers = number.map(double)

console.log(doubledNumbers)