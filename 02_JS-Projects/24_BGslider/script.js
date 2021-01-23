
/*
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++;

    if (activeSlide > slides.length -1){
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () =>{
    activeSlide--;

    if (activeSlide < 0){
        activeSlide = slides.length -1;
    }

    setBgToBody();
    setActiveSlide();
})

function setBgToBody(){
    body.style.background = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}

 */


const body = document.body;
const slides =  document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let activeSlide = 0;

    leftButton.addEventListener('click', ()=>{
        activeSlide--;

        if (activeSlide < 0){
            activeSlide = slides.length -1;
        }

        setBgBody();
        setActiveSlide();
    })

    rightButton.addEventListener('click', ()=>{
        activeSlide++;

        if (activeSlide > slides.length){
            activeSlide = 0;
        }

        setBgBody();
        setActiveSlide();
    })


function setBgBody(){
    body.style.background = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
        slides.forEach((slide) => slide.classList.remove('active'));

        slides[activeSlide].classList.add('active');
}



























































