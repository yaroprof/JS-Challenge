// 01

/*
function User (firstName, lastName, age, gender){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender = gender;
}
let user1 = new User( 'Max', 'Shevchuk', 8, 'male' );

// ---> PROTOTYPE

User.prototype.emailDomain = '@facebook';

// adding new properties- method to User- constructor

User.prototype.getEmailAdress = function(){
    return this.firstName+ this.lastName+ this.emailDomain;
}
;
console.log(user1.getEmailAdress());

 */

// 02
/*

function Car(model, color, motor){
    this.model = model,
        this.color = color,
        this.motor = motor
};

let car1 = new Car('Mazda: ', 'red', 1.6);

Car.prototype.price = ' 25000$';

Car.prototype.getModelPrice = function (){
    return (
        this.model+ this.motor+ this.price
    )
}

console.log(car1.getModelPrice())

*/

// 03

function Home(roof, room, square){
    this.roof= roof,
        this.room= room,
        this.square= square
}

let home1 = new Home(' triangle-form', ' 4 room', ' 100m' );

Home.prototype.price = '100 000$';

Home.prototype.getPriceHome = function (){
    return(
        this.price+ this.square+ this.roof + this.room
    )
}

console.log(home1.getPriceHome());





























































































