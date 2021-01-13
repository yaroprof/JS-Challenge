
(function (){
    let counterValue = 0;

    const buttons = document.querySelectorAll('.counterBtn');
    const counter = document.getElementById('counter');
    const container = document.querySelector('.main-container');

    // loop all of the 2th buttons

    buttons.forEach(function (btn){
        btn.addEventListener('click', function (event){
            const value = event.target;

            if (value.classList.contains('prevBtn')){
                counterValue--;
            }else if (value.classList.contains('nextBtn')){
                counterValue++;
            }
            counter.textContent = counterValue;

            if (counterValue === 0){
                counter.style.color = '#a99812';
            } else if(counterValue < 0){
                counter.style.color = '#A91229';
            } else if(counterValue > 0){
                counter.style.color ='#1221a9';
            }

            if (counterValue < 0){
                container.style.color = '#A91229';
            } else{
                container.style.color = '#fff'
            }


        })
    })



























})();