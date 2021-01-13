// SPREAD OPERATORS


// working with array
/*
const arrayOne = ['Marian', 'Hanry', 'Alex'];
const arrayTwo = ['Said', 'Ismail', 'Aisha'];

 */

//01
/*
const concatArray = [...arrayOne];

concatArray.forEach(function (name){
    console.log(name)
});

 */

// 02
/*
const concatArray = [...arrayOne, ...arrayTwo];
concatArray.forEach(function (name){
    console.log(name );
});

 */

// 03 - string to array
/*
const name = 'Donald';
const nameToArray = [...name];
nameToArray.forEach(function (letter){
    console.log(letter);
});

 */

// 04.1 - with h numbers
/*
const addNumbers = function (n1,n2,n3){
    return n1+n2+n3;
}

const numbers = [1,5,15];

// const addition = addNumbers(numbers[0],numbers[1], numbers[2]);
const addition = addNumbers(...numbers);
console.log(addition);

 */



// OBJECTS & SPREAD OPERATORS

const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA45'
};

const name = {
    firstName: 'Yaro',
    lastName: 'Shevchuk'
};

const person = {...address, ...name};
console.log(JSON.stringify(person, null, 2));



























