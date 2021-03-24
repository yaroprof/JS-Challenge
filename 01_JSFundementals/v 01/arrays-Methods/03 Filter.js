// Filter


const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 15, budget: 2000 },
    { name: 'Lora', age: 17, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
]
/*
// with for
const adults = [];

for (let i=0; i < people.length; i++){
    if (people[i].age >= 18){
        adults.push(people[i])
    }
}
console.log(adults)

 */

// with filter- method
/*
const adults = people.filter( person =>{   // на кожній ітерації отримуємо об'єкт person
    if (person.age >= 18){
        return true
    }
})
console.log(adults)

 */

/*
// filter methods- short-form
const adults = people.filter( person => person.age >= 18 )
console.log(adults)

 */






























