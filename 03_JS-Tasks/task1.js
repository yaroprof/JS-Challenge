//--- 01
/*
let x = 5
console.log(x++)  //5  - increment postfix

 */

/*
let x = 5
console.log(++x) //6 - increment prefix

 */

// --- 02
//[] + false - null + true

/*
let exp = [] + false - null + true
console.log(exp)   // NaN

// - [] (string) + false = 'false' (string);
// - 'false' - null = NaN;
// - NaN + true = NaN;

 */

// --- 03
/*
let y = 1;
let x = y = 2;
alert(x);  // 2

 */

// --- 04
/*
   let x = [] + 1 + 2
    console.log(x); // 12 - concatenation- string
    console.log(typeof (x)); // string

    // - [] - string
    // - string + 1 = string ... + 2 = string
    // - concatenation

 */

// --- 05
/*
console.log("1"[0])   // 1   - apply to string for index: 0 => 1- first element on the string
 */

// --- 06
/*
// console.log( 2 && 1 && null && 0 && undefined) // null
// - operator AND- && indicate the first false element- null; then && return this element
// - operator OR- || indicate the first true element

 */

// --- 07   what the differences between this 2x expression:
// !!(a && b)  and (a && b)
/*
console.log(!!(1 && 3))  // true
console.log(1 && 3)  // 3
 */
/*
console.log((!!(1 && 3)) === (1 && 3))   // false
 */


// --- 08 what will be result?
/*
console.log(null || 2 && 3 || 4);   // 3
// - AND- operator: more higher priority than OR-operator
// - AND- operator: && indicate the last true element: 3
 */

// --- 09  Is it true - that a == b
/*
const a= [ 1,2,3 ];
const b= [ 1,2,3 ];
console.log(a == b);   // false ?
// - a & b - the difference variables, so they are not equal to each other

 */

//--- 10
/*
console.log(typeof (+"infinity"))  // number
// console.log((+'15'))  // 15
// console.log((typeof (+'15')))  // number
 */

// --- 11
/*
let a = 'egyc'
let b = 'apple'
console.log( a>b )

// - need to compare uni - code symbols
 */

































