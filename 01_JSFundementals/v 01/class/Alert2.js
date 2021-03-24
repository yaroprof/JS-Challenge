class Alert2 extends Alert{   // Alert2 - розширює можливості Alert; Alert2 не буде впливатина батьківський конструктор - Alert
    constructor( a,b,c, icon ) {
        super(a,b,c)   // в середині Alert2 викликаємо батьківський конструктор- Alert // super та передаємо локальні, нові параметри нового конструктора - Alert2 // Alert успадкував від Alert на першому етапі все однакове
        this.icon = icon  // new proper
    }

    // new methods from Alert2

    showIconAlert(){
        document.querySelector( this.element ).innerHTML = `<p class="${ this.cssClass }"><i class="material-icons">${this.icon}</i>${this.message}</p>`;
    }

    myAlert(){
        alert( 'from Alert2 ' +this.message)
    }

}