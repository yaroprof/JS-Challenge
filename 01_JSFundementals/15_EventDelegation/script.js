// const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));  // remove class
// console.log(btns[0].classList.toggle('blue')); // toggle-adding removed class
// console.log(btns[0].classList.toggle('red')); // toggle- remove exist class

/*
// Example 01

if (btns[1].classList.contains('red')){
    console.log('Have a Red Class')
}else{
    console.log('There is no such class')
}

 */


// Example 02 --- If Button #2 havent class: 'red', then need to add this class to 2th button

/*
const btns = document.querySelectorAll('button');
    // btns[1].classList.add('red');

    btns[0].addEventListener('click', () =>{

        // --- 01 exp.
        // if (btns[1].classList.contains('red')){
        //     btns[1].classList.add('blue');
        //     btns[1].classList.toggle('red');
        // }else{
        //     console.log('button havent a Red Class ')
        // }

        // --- 02 exp.
        // if (!btns[1].classList.contains('red')){
        //     btns[1].classList.add('red')
        // }else {
        //     btns[1].classList.remove('red')
        // }

        // --- 03 exp.
        btns[1].classList.toggle('red');
});

    // console.log(btns[0].className)  // - old methos // class name list

 */


// --- Delegation Events

    const btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');

    btns[1].classList.add('red');

    // -- 01 - EventDelegation
    wrapper.addEventListener('click', (event)=>{
        // if ( event.target && event.target.classList.contains("blue")){
        //     console.log('HELLO')
        // }

        // if(event.target && event.target.tagName == 'BUTTON'){
        //     console.log('HELLO')
        // }

        if(event.target && event.target.matches("button.red")){
            console.log('HELLO')
        }
    });



    // -- 02

    // btns.forEach( btn=>{
    //     btn.addEventListener('click', ()=>{
    //         console.log('HELLO')
    //     })
    // } )



// -- Create additional Button at the end
    const btn = document.createElement('button');
    btn.classList.add('grey');
    wrapper.append(btn);
















































