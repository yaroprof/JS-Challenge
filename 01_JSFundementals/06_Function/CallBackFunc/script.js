'use strict'

// ---------> 1
/*
function  first(){
    setTimeout(function (){
        console.log(1)
    }, 1500)
}

function second(){
    console.log(2)
}

first();
second();

*/

// ---------> 2

function learnJS(lang, callback){
    console.log(`I study ${lang}`);
    callback();
}
function done(){
    console.log('I studied JS');
}

learnJS('JS', done)






