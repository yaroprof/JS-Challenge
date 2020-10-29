function User(firstName, lastName, age, gender){
    this.name = firstName,
    this.lastName= lastName,
    this.age =age,
    this.gender = gender;
};

let user1 = new User('Yaroslav', 'She', 41, 'male');

let user2 = new User('OLga', 'She', 36, 'female');

console.log(user1);
console.log(user2);

