function calculateTip(amount, tip) {

    let percent = (tip / 100);
    let proAmount = amount * percent;
    let totalAmount = amount + proAmount;

    if (tip<=5){
        console.log('You have to do better than that '+ '\n' + tip + '% percent is very low');

    }else if (tip >= 20){
        console.log('You are monster ' + '\n' + tip + '% percent is to big');
    }else{
        console.log('You are normal worker)) ' + tip + '% percent is good');
    }

        console.log('You progress is ' + proAmount + ' dollars');
        console.log('You total amount is ' + totalAmount + ' dollars');


    // console.log("Percentage " + percent);
    // console.log("Result " + tipAmount);
    // console.log("Total amount " + totalAmount);

}

calculateTip(80, 10);