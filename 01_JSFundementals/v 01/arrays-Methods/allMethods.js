// All of Array - methods

const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 35, budget: 2000 },
    { name: 'Lora', age: 18, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
]

const amount = people
    .filter( person => person.budget > 3000)
    .map(person => {
        return{
           info: `${person.name} ${person.age}`,
            budget: Math.sqrt(person.budget)
        }
})
    .reduce((total, person) => total + person.budget, 0)


console.log( amount )