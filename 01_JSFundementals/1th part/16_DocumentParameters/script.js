const box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

/*
const width = box.clientWidth;
const height = box.clientHeight;

const width1 = box.offsetWidth;
const height1 = box.offsetHeight;

const width2 = box.scrollWidth;
const height2 = box.scrollHeight;

console.log(`width: ${width} and height: ${height}`);
console.log(`width1: ${width1} and height1: ${height1}`);
console.log(`width2: ${width2} and height2: ${height2}`);

 */



// --- 01 ex. task- push the button and all text in block must be open
/*
btn.addEventListener('click', ()=>{
    // box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
})

    console.log(box.getBoundingClientRect().top);

 */


// --- 02 ex.
/*
    const style = getComputedStyle(box);
    console.log(style.display);

 */

// --- 03 ex.

btn.addEventListener('click', () =>{
    box.scrollTop = 0;
})




















