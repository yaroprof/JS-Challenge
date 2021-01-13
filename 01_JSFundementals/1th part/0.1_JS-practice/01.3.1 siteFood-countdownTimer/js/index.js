window.addEventListener('DOMContentLoaded', () =>{


    // --- TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items'),

        tabsContent = document.querySelectorAll('.tabcontent');

     function hideTabContent(item){
         tabsContent.forEach(item =>{
             item.classList.add('hide', 'fade');
             item.classList.remove('show', 'fade');
         });
         tabs.forEach(item =>{
             item.classList.remove('tabheader__item_active');
         });
     }
    function showTabContent(i = 0){
         tabsContent[i].classList.add('show');
         tabsContent[i].classList.remove('hide');
         tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
     showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) =>{
                if ( target == item ){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });



    //--- PROMOTION- TIMER

    const deadLine = '2020-11-16';

    function getTimeRemaining( endTime ) {
        const t = Date.parse(endTime) - Date.parse(new Date());

        const days = Math.floor((t / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / (1000 * 60) % 60));
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else {
            return num;
        }
    }

    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <=0){
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', deadLine);






















});



































