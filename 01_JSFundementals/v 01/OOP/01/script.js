// Objects

let a = {
    text: 'test0',
    bold: 'true',
    color: 'red',
    show: function (){
        console.log(this.color)
    }
}

let b = {
    "fontSize": '24px',
    __proto__: a    // успадкування від об'єкту  a
}

// b = 5   // зміна типу даних на примітив - виникне помилка, прототипом може бути лише об'єкт


let c = {
    'fontFamily': 'verdana',
    __proto__: b  // успадкування від об'єкту  b
}

console.log(c.hasOwnProperty('fontFamily'))  // true
console.log(c.hasOwnProperty('bold'))  // false
console.log(c.hasOwnProperty('fontSize'))  // false



