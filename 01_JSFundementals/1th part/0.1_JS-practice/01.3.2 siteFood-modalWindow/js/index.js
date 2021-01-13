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


    //--- MODAL WINDOW

    /*


		HELLO WORLD...


TODAY I HAVE A LITTLE CHALLENGE...)

CREATE MODAL WINDOW FOR THE SITE PAGE)

I'M SHOCKED

ITS A JOKE

GO AHEAD


    NEED TO...

CREATE MODAL WINDOW FOR THE SITE - PAGE

DOCUMENTS:
HTML
CSS
JS

IN FACT, I HAVE ALREADY PREPARED THE CODE

MAIN TASKS:

    Task:

    1th - Create Event - Open Modal Window By Button
    2th - Create Event - Open Modal Window By Time Out // after 3 sec for example)
    2th - ... - Close Modal Window By Button
    3th - ... - Close Modal Window By Modal- Field
    4th - ... - Close Modal Window By Escape Button




    Steps:
    * 1th - adding event to the Open Modal Button
    * 2th - adding event to the close Modal Button
    * 3tn - adding event to the close Modal Field
    * 4th -
    *
    * */







const modalTrigger = document.querySelectorAll('[data-modal]'),  // calls all elements - buttons, pseudo-array. As a result, an event handler cannot be assigned to this pseudo-array or need to go through the cycle bellow
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');  // the page of the site under the modal window does not move, but is fixed

    // OPEN MODAL

    function openModal(){
        modal.classList.toggle('show')
        document.body.style.overflow = '';
        clearInterval(modalTimerId);
    }


    // --- we were able to use the event handler for several identical buttons
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)


            // modal.classList.add('show');
            // modal.classList.remove('hide');

            // --- the command - toggle works similarly / only changes the current status to the opposite
            // modal.classList.toggle('show')
            // document.body.style.overflow = '';

    });

     // CLOSE MODAL

    function closeModal(){
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        modal.classList.toggle('show')
        document.body.style.overflow = '';
    }

    // CLOSE _ PRESS ON BUTTON
    modalCloseBtn.addEventListener('click', closeModal);

    // CLOSE _ PRESS ON ALL OF THE MODAL FIELD
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })


    // ESCAPE BUTTON PRESS

    // perform functionality - closing the modal window with the - escape button; to do this, we first catch the event that is triggered when you press this key.

    document.addEventListener('keydown', (e) =>{
         if (e.code === 'Escape' && modal.classList.contains('show')){   // The KeyboardEvent.code property represents a physical key on the keyboard
             closeModal();
         }
    });

    // Modal window should be launch after 10-15 sec

    const modalTimerId = setTimeout(openModal, 3000)

    // Modal window should be launch after reaching the end of the page
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)







});



































