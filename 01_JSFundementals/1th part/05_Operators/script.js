'use strict'


// 01 --- CONCATENATION

    // console.log('arr1' + 'arr2')   // arr1arr2, sum several elements
    // console.log(5 + '-OBJECT')  //   5-OBJECT
    // console.log( 5 + '3')  // 53
    // console.log(5 + + '5') // 10 - type casting


// 02 --- increment / decrement


    // -- POSTFIX
    // let incr = 10,
    //     decr = 10;
    //
    // incr++;
    // decr--;
    //
    // console.log( incr)  // 11
    // console.log( decr)  // 9


    // --- PREFIX

    //
    // let incr = 10,
    //     decr = 10;


    // first performs the operation then demonstrates the result
    // console.log(++incr);  // 11
    // console.log(--decr);  // 9


    // first demonstrates the result then performs the operation
    // console.log(incr++);  // 10
    // console.log(decr--);  // 10



// 03 --- REMAINDER OPERATOR


    // console.log( 5 % 2 )   // 1


// 04 --- COMPARISON OPERATOR

    // console.log( 2*4 == 8) // true

    // console.log( 2*4 === 8 ) // true

// operator ===  comparison data types and value
// console.log( 3 * 5 === '15' )  // false

// operator ==  comparison only value
// console.log( 3 * 5 == '15' )  // true
// console.log( 3 * 5 == '11' )  // false


// 05 --- LOGIC OPERATOR

// -- AND   &&
// && working when two or more arguments - true

    // 01v
    // const isChecked = true
    // const isClosed = true
    // console.log(isChecked && isClosed);   // true

    // 02v
    // const isChecked = false
    // const isClosed = true
    // console.log(isChecked && isClosed);   // false


// -- OR  ||
// || working when at least one arg. true

    // 01
    // const isChecked = true;
    // const isClosed = false;
    // console.log(isChecked || isClosed)   // true



// 06 --- ORDER OF OPERATORS


    console.log( 2+2*2 === 8 )  // false
    console.log( 2+2*2 === 6 )  // true


