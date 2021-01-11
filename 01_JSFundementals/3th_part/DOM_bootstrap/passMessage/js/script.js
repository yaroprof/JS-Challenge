
(function (){

    document
        .getElementById('message-form');

        // set event to form
    addEventListener("submit", function (e){
        e.preventDefault();
        const message = document.getElementById('message');
        const value = message.value;

        // set condition, checking for empty space
        if (value === ''){
            const feedback = document.querySelector('.feedback');
            feedback.classList.add('show');

            // close this message after 2sec
            setTimeout(function (){
                feedback.classList.remove('show')
            }, 2000);
        } else{
            document.querySelector('.message-content').textContent = value;

        }
    })
})();


























































































