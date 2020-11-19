class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}
/*
const square = new Rectangle(10, 10);
console.log(square.calcArea());

const long = new Rectangle(50, 10);
console.log(long.calcArea());

 */


// create new class inheriting properties from main class - Rectangle

class ColorRectangleWithText extends Rectangle{   // extends - inheriting parents element - properties
    constructor(height, width, text, bgColor){
        super(height, width);  // super - calling super parents constructor
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text ${this.text}, color: ${this.bgColor}  `)
    }
}

const div = new ColorRectangleWithText( '15', 10, 'Lorem', 'red' );

div.showMyProps();
console.log(div.calcArea());






