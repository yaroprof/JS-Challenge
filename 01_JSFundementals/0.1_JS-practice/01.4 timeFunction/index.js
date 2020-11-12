
// 01 --- setTimeOut
/*
const timerId =  setTimeout(function (text){
    console.log(text)
}, 2000, 'ZZZ');

 */


// 02
/*
const timeId = setTimeout(logger, 2000);

function logger(){
    console.log('Text1')
}

 */

// 03   --- setInterval
/*
const btn = document.querySelector('.btn');
let timerId,
    i = 0; // Counter

btn.addEventListener('click', () =>{
     timerId = setInterval(logger, 500)
})

function logger(){
    if (i === 3){
        clearInterval(timerId);
    }
    console.log('Text2');
    i++;
}

 */


// 04  setTimeOut doing like setInterval
/*
let id = setTimeout(function log(){
    console.log('Test');
    id = setTimeout(log, 500)
} , 500);

 */


// 05 Work Example


const btn = document.querySelector('.btn');


function myAnimation(){
    let pos = 0;
    const elem = document.querySelector('.box');
    const id = setInterval(frame, 10);

    function frame(){
        if (pos === 300){
            clearInterval(id)
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}



btn.addEventListener('click', myAnimation);




























































