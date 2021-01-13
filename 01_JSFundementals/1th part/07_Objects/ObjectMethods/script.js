

// ---> method < for in >

    const options = {
        name: 'test',
        width: 1250,
        height: 550,
        colors: {
            border: 'black',
            color: 'red'
        }
    }

    let counter = 0;
    for ( let key in options){
        if( typeof options[key] === 'object'){
            for (let i in options[key]){
                console.log( `options keys ${i} have a values: ${options[key][i]}`);
                counter++;
            }
        }else{
            console.log( `options keys ${key} have a values: ${options[key]}`);
            counter++;
        }
    }

console.log(counter);





















































