// 01
/*
const arr = [1,2,3]

const [a,b,c] = arr;
console.log(a,b,c)

 */

// 02 - restaurant

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organ ic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order( starterIndex, mainIndex ){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

// const [first, second] = restaurant.categories;
// const [first, ,second] = restaurant.categories;  // 3th element
// console.log(first, second)

/*
let [ main, , secondary ] = restaurant.categories;

// Switching variables
[main, secondary] = [ secondary, main ]
console.log(main, secondary)
 */

// Receive 2 return from a function
/*
const [ starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse)

 */

// Nested Destructuring
/*
const nested = [2,4,[ 5,6 ]]
// const [a, ,b] = nested
// console.log(a,b)

// without array - destructuring inside destructuring
const [a, , [b,c]] = nested;
console.log(a,b,c)

 */


// Default values

const [ p = 1, q = 1, r = 1 ] = [8, 9]
console.log( p, q, r )
























