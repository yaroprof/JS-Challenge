let str = 'some';
let strObj = new String(str);

// console.log(strObj);  // [String: 'some']
// console.log(typeof (str))
// console.log(typeof (strObj))

// console.dir([1,2,3])
/*
const soldier = {
    health: 400,
    armor: 100
}
const john= {
    health: 100
}
john.__proto__= soldier
console.log(john.armor)

 */

// --> setPrototypeOf


const soldier = {
    health: 400,
    armor: 100,
    sayHello(){
        console.log('Hello')
    }
}

// const john = {
//     health: 100
// }

// Object.setPrototypeOf(john, soldier);
// john.sayHello()


// ---> Object.create

const john= Object.create(soldier)
john.sayHello()





git add .






















