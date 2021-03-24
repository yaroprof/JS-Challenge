// find - method
const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 35, budget: 2000 },
    { name: 'Lora', age: 18, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
]

/*
const thisName = people.find(person => person.name === 'Alex')
console.log(thisName)

 */

// find index

const thisIndex = people.findIndex(person => person.name === 'Lora')
console.log(thisIndex)