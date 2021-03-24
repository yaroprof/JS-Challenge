class Alert{
    constructor(a,b,c) {
        this.message = a;   // для доступу до класу з конструктору використ. - this
        this.cssClass = b;
        this.element = c;
    }
    showAlert(){
        document.querySelector( this.element ).innerHTML = `<p class="${ this.cssClass }">${ this.message }</p>`;
    }

    myAlert(){
        alert('from Alert1' +this.message)
    }
}
