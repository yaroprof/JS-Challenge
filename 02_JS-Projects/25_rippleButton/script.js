const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e){
        const x = e.clientX;
        const y = e.clientY;

        const buttonLeft = e.offsetLeft;
        const buttonTop = e.clientTop;

        const xInside = x- buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = xInside + 'px';
        circle.style.top = yInside + 'px';

        this.appendChild(circle);
    })
})

























































