
function createJack(){
    const jack = document.createElement('div');
    jack.classList.add('jack');

    jack.innerText = '🎃';
    jack.style.left = Math.random() * 100 + 'vw';

    document.body.appendChild(jack);
    jack.style.animationDuration = Math.random()*2+3+3+'s';
}

    setInterval(createJack, 1000);
    setTimeout(() =>{
        jack.remove()
    }, 5000);




























