  function myAlert(a,b,c){
      document.querySelector(c).innerHTML = `<p class="${b}">${a}</p>`;
  }
  // myAlert('Howdy', 'orange');
  myAlert('Howdy', 'red', '.test');
  myAlert('Howdy', 'orange', '.test2');


  // -- -Alert class
  // -- -Alert2 class

  // --- робота з класами, створення нових об'єктів

    let m = new Alert('My message', 'red', '.test');
  console.log(m)
    m.showAlert()


    let m2 = new Alert2('My message', 'red', '.test', 'account_balance')
    m2.showIconAlert();
    m2.myAlert( this.message );
  console.log(m2)





























