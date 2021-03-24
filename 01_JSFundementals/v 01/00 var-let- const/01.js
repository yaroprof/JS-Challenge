/*
// 01 - const
const person = 'Nick'
person = 'John' // error

console.log(person)

 */
/*
// redeclaration
const myVar = 15
myVar = 17

console.log(myVar) // error

 */

// reassigned
/*
const myVar = 17;
const myVar = 15;
console.log(myVar) // error

 */

// cont with array/ object
/*
const person = {
    name: 'John'
}

person.name = 'Nick'

console.log(person.name)

 */
/*
const person = []
person.push('John')

console.log(person[0])

person = ['Nick']
console.log(person[0])

 */











// 02 -  let
/*
let person = 'Nick'
person = 'John';  // ok

console.log(person)
 */

// - let accessible
// 01
/*
 function myFunction(){
     let myVar = 'Nick'

     if (true){
         let myVar = 'John'
         console.log(myVar)   // John
     }
 }
myFunction()
console.log(myVar)   // myVar is not defined

 */

/*
console.log(myVar)
let myVar = 'John' // Cannot access

 */

// cant re-declare let variable
/*
let newVar = 3
let newVar = 5
console.log(newVar)  // Identifier 'newVar' has already been declared

 */

// 03 - var
/*
function func(){
    var myVar = 15;
    console.log(myVar); // ok
}

// console.log(myVar); // isn`t definrd

func();

 */

//  var- hosting
/*
console.log(myVar); // undefined, no error
var myVar = 15

 */
/*
var myVar;
console.log(myVar);
myVar = 100;  // undefined, no error

 */






















