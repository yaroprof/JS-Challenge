
/*
const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125,125,0.5)'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    let random = Math.floor(Math.random()*colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random];

});

 */


const colors = ['yellow', 'green', 'blue', 'rgba(125,125,125, 0.5)', '#f15025', '#000'];
const btn =document.getElementById('btn');

btn.addEventListener('click', function (){
    let random = Math.floor(Math.random()*colors.length);
    let body = document.body;

    body.style.backgroundColor = colors[random];

})






















