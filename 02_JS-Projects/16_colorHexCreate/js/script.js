/*
(function (){
    const hexValue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex(){
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for (let i=0; i<6; i++){
            let random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }

})();

 */


    (function (){

        const heValue = document.getElementById('hex-value');
        const btn = document.getElementById('btn');



        btn.addEventListener('click', hexCreate)

            function hexCreate(){
                let hexColors = '#';
                let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
                for (let i=0; i<6; i++){
                    let random = Math.floor(Math.random() * hexValues.length);
                    hexColors += hexValues[random];  333333e2
                }

                document.body.style.backgroundColor = hexColors;
                heValue.textContent = hexColors;

            }









    })();




























