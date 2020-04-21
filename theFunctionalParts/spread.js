const person = {
    name: 'Jimmy Smith',
    age:40,
    heirColor: 'brown',
    eyeColor: 'blue'
}
const careerData = {
    title: 'developer',
    company:'ABC Software'
};

const personWithCareerData = {
    ...person,
    ...careerData,
}
const numbers = [1,2,3,4,5]
// numbers.push(6)
const newNumbers = [
    0,
    ...numbers,
    6,
];
console.log(personWithCareerData)