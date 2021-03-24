// Spread

// 01  spread with arrays
/*
const citiesUkraine = ['Kyiv', 'Kharkiv', 'Lviv']
const citiesEurope = ['London', 'Paris', 'Rome']

// console.log(citiesUkraine)  //  array

// spread
// console.log(...citiesEurope)
// console.log(...citiesUkraine)  // string- non array after spread

const allCities = [...citiesUkraine, 'Boston' ,...citiesEurope]  // connection both arrays without concat- method
console.log(allCities)

 */


// 02 spread with objects
/*
const citiesUkrainePopulation = {
    Kyiv: 7,
    Lviv: 3,
    Odesa: 2
}

const citiesEuropePopulation = {
    London: 10,
    Kyiv: 8,
    Paris: 7,
    Rome: 6
}

console.log({...citiesUkrainePopulation, ...citiesEuropePopulation})

 */

// Practice

// 01
/*
const numbers = [5, 37, 25, 75, 15,155]
// console.log((Math.max(5, 37, 25, 75, 15)))
console.log(Math.max(...numbers))
 */


// 02 work with html-dom

let divs =  document.querySelectorAll('div');
const nodes = [...divs];   // за допомогою спред - оператора створюємо з листа - масив
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))














































