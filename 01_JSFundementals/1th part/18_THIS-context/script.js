
// ---  01 method - call common function ; result = window
/*
function showThis(){
    console.log(this)  // this refer on Global object
}

showThis();

 */

// 01 method - example; this = window or this = undefined
/*
function showThis(a,b){
    console.log(this);  // ref on  Window

    function sum(){  // call context - window or undefined
        console.log(this)  // ref on sum
        // return this.a + this.b;  // no references on a,b,arguments
        return a + b;  // using Closure method, then we may ref on sum  // result- 5
    }

    console.log(sum());
}

showThis(2,3);

 */

// 02 method  -  if we have method inside an object, then call context already will be referenced on this method
/*
const obj = {
    a: 10,
    b: 15,
    sum: function (){
        console.log(this);
    }
};
obj.sum();

 */


// 03 method: manual binding --- call, apply, bind
/*

// ---> call / apply methods

    function sayName( surname, age ){
        console.log(this);  // chain to context to the next any object
        console.log(this.name + surname + age);  // take some parameters from tis object
    }

    // This object for it need to connect function sayName
    const user= {
        name: 'John'
    };

    sayName.call(user, ' Smith ', 33);
    sayName.apply(user, [ ' Dou ', 23 ]);

 */


    // next result:
    // { name: 'John' }
    // John



// ---> bind- methods
/*
function count(num){
    return this*num;
}

const double = count.bind(2);

console.log(double(3));

 */


// --- Practice with  - this

/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    // this.style.backgroundColor = 'red';  // btn - context - target
    // console.log(this);   // window - context

})
*/


// --- next example
/*
const obj = {
    num: 5,
    sayNumber: function (){
        const say = () =>{
            console.log(this.num);
        };
        say();
    }
}
obj.sayNumber();

 */

// --- next example - short-form
/*
const double = (a) => a*2;
console.log(double(3));

 */

// next example - BUTTON

const btn = document.querySelector('.btn');

// 01 - arrow func
/*
btn.addEventListener('click', ()=>{
    this.style.backgroundColor = 'red';   // TypeError: Cannot set property 'backgroundColor' of undefined  // // button - painted on style- color; with arrow form- func/ - this func/ have not self co ntext
})
 */

/*
// 02 - standard func
btn.addEventListener('click', function (){
    this.style.backgroundColor = 'red';   // button - painted on style- color; with standard form- func/ - this func/ have self context
})
 */

// 03 - upgrade arrow function


btn.addEventListener('click', (e) =>{
    e.target.style.backgroundColor = 'orange';
})








































































