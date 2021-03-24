// 01
// without destructuring

// Object
/*
const person = {
    firstName: 'Nick',
    lastName: 'Anderson',
    age: 41,
    sex: 'M'
}

const first = person.firstName
const last = person.lastName
const age = person.age
console.log(first, last, age);

 */

const person = {
    firstName: 'Nick',
    lastName: 'Anderson',
    age: 41,
    sex: 'M'
}
const{ firstName: first, age, city = 'Paris' } = person;
console.log(age)
console.log(first)
console.log(city)























