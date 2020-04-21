const employees =[{
    name: "John Olsen",
    age: 54,
    jobTitle: 'Developer',
    salary: 70000,
},{
    name: "Karen Norris",
    age: 34,
    jobTitle: 'Enginner',
    salary: 75000,
},{
    name: "Daryl Cline",
    age: 25,
    jobTitle: 'seretary',
    salary: 35000,
},{
    name: "John Smith",
    age: 51,
    jobTitle: 'Developer',
    salary: 75000,
},{
    name: "Bob Olsen",
    age: 35,
    jobTitle: 'Developer',
    salary: 75000,
}
]

const developer = employees.filter(e => e.jobTitle == 'Developer')
// console.log(developer)

//Find the avarage of Developers salaries
const developerSalaries = developer.map(dev => dev.salary)

const totalDevSalary = developerSalaries.reduce((acc, x)=>{
    return acc + x
}, 0)
const avarageDevSalaries = totalDevSalary/developerSalaries.length;

console.log(avarageDevSalaries)

//Find the avarage of non developers salaries

const nonDevelopers = employees.filter(e => e.jobTitle !== 'Developer')

const nonDeveloperSalaries = nonDevelopers.map(e => e.salary)

const totalNonDevSalaries = nonDeveloperSalaries.reduce((acc, x)=>{
    return acc + x;
}, 0)

const nonDevAvarageSalaries = totalNonDevSalaries/nonDeveloperSalaries.length;

console.log(nonDevAvarageSalaries)