function User (firstName, lastName, age, gender){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender = gender;
}
let user1 = new User( 'Max', 'Shevchuk', 8, 'male' );

// ---> PROTOTYPE

User.prototype.emailDomain = '@facebook';

// adding new properties to User- constructor

User.prototype.getEmailAdress = function(){
    return this.firstName+ this.lastName+ this.age+ this.emailDomain;
}

user1.getEmailAdress();
console.log(user1);





