const open = document.getElementById('open'),
    close = document.getElementById('close'),
    container = document.getElementById('container');

open.addEventListener('click', () =>{
    container.classList.add('active');
});

close.addEventListener('click', ()=>{
    container.classList.remove('active');
})

