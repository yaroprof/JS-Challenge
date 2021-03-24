// reduce

const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 35, budget: 2000 },
    { name: 'Lora', age: 18, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
]

// задача: підразхувати суму всіх бюджетів по працівникам
// 01 спосіб
/*
let amount = 0;
for(let i= 0; i < people.length; i++){
    amount += people[i].budget
}
console.log(amount)
 */

// 02 - reduce
/*
const amount = people.reduce((total, person ) =>{   // person- ітеруємий елемент у масива
    return total + person.budget
}, 0 )   // початкове значення, яке буде привласнено змінній total- загальна кількість обьєктів аналізу, яке постійно змінююється, у д.в. - budget)

console.log(amount)
*/


/*
const amount = people.reduce(( total, person ) =>  total + person.budget, 0)
console.log(amount)

 */



