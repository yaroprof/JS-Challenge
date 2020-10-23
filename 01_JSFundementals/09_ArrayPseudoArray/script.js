
// let arr = [ 2,3,4,7,9 ];

// ---> for ( ... of ... ) - method
/*
for (let i=0; i< arr.length; i++){
    // console.log(arr[i])
}

for (let value of arr){
    console.log(value)
}

 */


// arr[99] = 0;
// console.log(arr);
// console.log(arr.length)  // 100


//  ---> forEach - method
/*
let arr = [ 1,35,7,9 ];

arr.forEach( function (item, i, arr) {
    console.log(`${i}: ${item} inside array: ${arr}`)
})

 */

// ---> Split -method

/*
const str= prompt("", "")
const products = str.split(", ")
// console.log(products)

// ---> join-method
console.log(products.join(';'))
*/



// ---> sort - method

let arr = [ 33, 12, 4, 25 ]
console.log( arr.sort( compareNum ) )  // give correct sorting from min to max numbers

function compareNum(a,b){
    return a-b
}






