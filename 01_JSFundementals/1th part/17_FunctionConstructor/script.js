function User(name, old){
    this.name = name;
    this.old = old;
    this.human = true;
    this.hello = function (){   // // Adding new method on User
        console.log(`${this.name} Hello`);
    }
}

const peter = new User('Peter', 33);  // Create new person through User constructor
console.log(`He this ${peter.name} and him ${peter.old} year`);  // Call new person
peter.hello();  // Call User - method - 'hello'

// Adding new method on User- Prototype
User.prototype.exit = function (){
    console.log(`${this.name} is Exit`)
}
peter.exit(); // Call new User Prototype - method - 'exit'

const robin = new User('Robin', 31);
robin.exit();