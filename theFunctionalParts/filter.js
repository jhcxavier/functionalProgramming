const numbers = [1,2,3,4,5,6,7,8,9,10]

//normal way to do it
let evenNumbers = []

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i])
    }
}
// console.log(evenNumbers)

//functional way 

const isEven = x => x % 2 === 0;

const evenNumbers2 = numbers.filter(isEven)

//without writing a second function 

const evenNumbers3 = numbers.filter(x => x % 2 === 0)

// console.log(evenNumbers2)
// console.log(evenNumbers3)
//--------------------------
//get the words bigger than length 5 
const words = [
    'hello',
    'goodbye',
    'the',
    'Antartica'
]
const isLongerThan5 = word => word.length > 5;

const longWord = words.filter(isLongerThan5)
const longWord2 = words.filter(e => e.length > 5)
//higher order function

const createLengthTest = minLength => word => word.length > minLength;

const lengthWord = words.filter(createLengthTest(5))
console.log(lengthWord)
