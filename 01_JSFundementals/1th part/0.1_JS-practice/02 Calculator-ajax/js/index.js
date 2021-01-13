const inputUah = document.querySelector('#uah'),
    inputUsd = document.querySelector('#usd');

 inputUah.addEventListener('input', ()=>{

       const request = new XMLHttpRequest();
       request.open('GET','js/current.json');
       request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
       request.send();

       request.addEventListener('load', () =>{
            if(request.status === 200 ){
                console.log(request.response);
                const data = JSON.parse(request.response);  // transform json data to normal js- form
                inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);  //  current from uah to usd
            }else{
                inputUsd.value = 'Something wrong'
            }
       })
 })