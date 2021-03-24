
// Class: User
class User{
    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log(this.name + 'Hello')
        return this.name;
    }
}
const john = new User('John')
// console.log(john)

// Class: Person
class Person extends User{
    constructor(name, email) {
        super(name);
        this.email = email;
    }
    sayHello(){
        console.log(super.sayHello())
        console.log(this.email);
        return this.email;
    }
}

const peter = new Person( 'Peter ','peter@mail.com')

console.log(peter.sayHello())


// Class without Constructor
/*
class User{
    sayHello(){
        console.log('Hello')
    }
}

const John = new User();
console.log(John.sayHello())

class Person extends User{
    constructor(name){
        super()
        this.name = name;

    }
}

const peter = new Person('Peter');
console.log(peter)

 */















