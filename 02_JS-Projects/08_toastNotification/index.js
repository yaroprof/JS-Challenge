const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () =>{
    createNotificatiion();

    function createNotificatiion(){
        const notif = document.createElement('div');
        notif.classList.add('toast');
        notif.innerText = 'This is a crazy text';
        container.appendChild(notif);

        setTimeout( () => {
            notif.remove()
        }, 3000 );
    }
})