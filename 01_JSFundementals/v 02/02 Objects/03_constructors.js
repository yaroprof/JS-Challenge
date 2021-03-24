// 01
/*
function User( name, age ){
    this.name = name;
    this.age = age;

    // return User  // User - далі вся логіка зупиняється
}

let person = new User('Peter', 35)

console.log(person.name)
console.log(person.age)

 */

// 02 - using Return
/*
function BigUser(){
    this.name ='Peter';

    return {name: 'George'}
}

console.log( new BigUser().name )  // George

 */

// 03 - add Method into constructor
/*
function Username(name){
    this.name = name;

    this.sayHi =  function(){
        console.log( this.name + ' Howdy' )
    }
}

let john = new Username('John')
john.sayHi()

 */


// task ---   Make Calculator

/*
function Calculator(){

    this.read = function (){
        this.a = prompt('enter 1th num: ', 0)
        this.b = prompt('enter 2th num: ', 0)
    }

    this.sum = function (){
        return this.a + this.b;
    }

    this.multi = function (){
        return function (){
            return this.a * this.b;
        }
    }
}

let calc = new Calculator();
calc.read();

alert(calc.sum());
alert(calc.multi());

 */

// task ---































