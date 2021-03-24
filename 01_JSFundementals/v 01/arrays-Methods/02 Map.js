// MAp

const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 35, budget: 2000 },
    { name: 'Lora', age: 18, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
]

/*
const newPeople = people.map(person =>{   // на кожній ітерації ми отримуємо об'єкт person
    // return person
    // return 'Hello'  // можна не прив'язуватись до об'єкту person, а повернути новий об'єкт - 'Hello'
    // return person.name  // ми можемо оперувати з нашим обєктом та отримувати необхідні з нього дані
    // return person.budget
    // return `${person.name} (${person.age})`
return`${person.name}(${person.budget} dollars)`
})
console.log(newPeople)

 */
/*
const newPeople = people.map( person => `${person.name} ({ person.age } years old` )
console.log(newPeople)

 */
/*
const newPeople = people.map(person => `${person.age}` *3)
console.log(newPeople)

 */


