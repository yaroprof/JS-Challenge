// destructuring for array / objects

// for array

/*
function calcValue(a,b){
    return[
        a+b,
        a-b,
        a * b,
        a / b
    ]
}

const [sum, sub = 'No submitting', ...other] = calcValue(25, 15)   // sub = 'No submitting' - default parameter

console.log( sum, sub, other)

 */

// for objects

const person={
    name: 'Yaroslav',
    age: 41,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
}

// const{
//     name: firstName = 'No name',
//     age,
//     car="Haven`t a car",
//     address: {country: myCountry, city: homeTown}
// } = person
// console.log(firstName, age, car, myCountry, homeTown)
/*
const {name, ...info} = person
console.log(name, info)

 */


//  --- on practice

function logPerson({name= 'Mike', age}){
    console.log(name + ' ' + age);
}

logPerson(person);



















