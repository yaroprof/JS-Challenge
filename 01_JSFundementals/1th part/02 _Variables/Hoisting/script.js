// --- 01

/*
console.log(sum(11, 15))

function sum ( a,b ){
    return a+b
}

*/



// --- 02
/*
console.log(i)   // undefined - помилки немає, просто змінна - i ще не визначена/ змінна ще не визначена, а результат вже видає, хоч і undefined
var i = 45

*/



// --- 03  - let/ const не підлягають hoisting

/*
console.log(num)   // Cannot access 'num' before initialization
let num = 15

console.log(num)   // 15  - викликано після ініціалізації і оотримано результат

*/


// --- 04 --- FUNCTION EXPRESSION/ DECLARATION  -  можна використ. функц. до і після її ініціалізації

// різні способи оголошення функцій



// --- Function Declaration
/*
console.log(square(5))

function square(num){
    return num ** 2
}

*/

// --- Function Expression  - можна використ. функц. після того, як вона визначена

// console.log(square(3))   // square is not a function - hoisting тут не працює, у випадку Function Expression
/*
var square = function (num){
    return num ** 4
}

console.log(square(3))   // 81

*/























































































































