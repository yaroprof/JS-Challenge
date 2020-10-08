// ************* 01 - SCOPE ****************

// behavior variables in a functions

        /*

        let num = 'Global scope'

         function showMessage(){

            // let num = 'Local scope';   // local variable the same  name with the global environment

            num = 'Local scope'   // undeclared function has access to the global environment and changes the global function // Local scope

         }

         showMessage();
        // console.log(num)   // num is not defined - from the outside the variable is not achievable // Global Scope
        // console.log(num) //   Global scope - variable from global environment
        // console.log(num)  // Local scope

         */


// ************* 02 - CLOSURE ****************



        // *** Closure - the function with the all variables which are achievable for her (function)

        /*

        let num = 20;   // global var

        function showMessage(){

            // 1th option - when local variable are declared


                // let num =10;   // local var
                // console.log(num) // 10 - var from the local environment


            // 2th option- when No variable - in this case console.log searching var in global environment

                console.log(num)   // 20

        }

        showMessage()


        // console.log(num)   // 20 - var from the global environment

         */


// ************* 03 - RETURN ****************



        // *** key word - Return - adding result and stop further action of the function but this function can be used many times

        // 1th option
        /*
        function calc( a,b ){
            return (a+b);

            // console.log('Hey')  // Unreachable code, after - return
        }

        console.log(calc(3,5));  // 8
        console.log(calc(7,5));  // 12

         */



        // 2th option

        /*
        function ret(){
            let num = 50;

            return num  // - return result to global environment from the function
        }
        const another = ret()   // - create global var and assign from local var result. So we take result on global from the local env.   // 50
        console.log(another)

         */



// ************* 04 - Function Types ****************

// *** 1th--- Function Declaration
// this func. exists before it declared

/*
console.log(funcExample('Howdy'))

function funcExample(text){
    return text

}

 */



// *** 2th--- Function Expression

// can be called function Only after the declared
/*

let func = function (a,b){
    return (a+b)
}

console.log(func(5,9))

 */


// *** 3th--- Arrow Function

/*

// console.log(calc(3,8)) // Cannot access 'calc' before initialization
const calc = (a,b) => a+b;

console.log(calc(3,8))   // 11

 */





















































































