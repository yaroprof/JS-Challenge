/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод `toggleVisibleMyDB`, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


/*

    let numberOfFilms;

    function start(){
        numberOfFilms = +prompt('How films did you see?', '');

        while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
            numberOfFilms = +prompt('How films did you see?', '');
        }

    }
    start()


    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    function rememberMyFilms(){
        for (let i=0; i < 2; i++){
            const a = prompt('Your of the last films?', ''),
                b = prompt('Your rating?', '');

            if ( a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done')
            }else{
                console.log('error');
                i--;
            }
        }
    }

    rememberMyFilms();

    function detectPersonalLevel(){
        if (personalMovieDB.count < 10){
            console.log('You are weak viewer ')
        }else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log('You are common viewer')
        }else if ( personalMovieDB.count >= 30 ){
            console.log('You are movie buff')
        }else{
            console.log('Just Error!') }

    }

    detectPersonalLevel();


    function writeYourGenres(){

        for (let n= 0; n < 3; n++){
            let c = prompt(`Your favorite genre is numbered ${ personalMovieDB.genres }`, ''),
                d = prompt('Genre number from 1 to 3');

            if( c !=null && d != null && c != '' && d != ''  ){
                personalMovieDB.genres[c] = d;
            }else{
                console.log('Error');
                n--
            }
        }

        }

    writeYourGenres();

    function showMyDB(){
        if(personalMovieDB.privat === false){
            console.log(personalMovieDB)
        }
    }

    showMyDB();

 */


// ---> REFACTORING


    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

        start: function(){
              personalMovieDB.count = +prompt('How films did you see?', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                personalMovieDB.count =  +prompt('How films did you see?', '');
            }
        },

        rememberMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Your of the last films?', ''),
                    b = prompt('Your rating?', '');

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    this.movies[a] = b;
                    console.log('done')
                } else {
                    console.log('error');
                    i--;
                }
            }
        },

        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('You are weak viewer ')
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('You are common viewer')
            } else if (personalMovieDB.count >= 30) {
                console.log('You are movie buff')
            } else {
                console.log('Just Error!')
            }
        },

        showMyDB: function(hidden){
            if(!hidden) {
                console.log(personalMovieDB)
            }
        },

        toggleVisibleMyDB: function (){
            if (personalMovieDB.privat){
                personalMovieDB.privat = false;
            }else{
                personalMovieDB.privat = true;
            }
        },

        writeYourGenres: function() {
            for (let i = 0; i < 3; i++) {
                let genre = prompt(`Your favorite genre is numbered ${1}`, '');
                personalMovieDB.genres[i-1] = genre;

                if (genre === '' || genre === null ){
                    console.log('Wrong text or empty text-field!');
                    i--;
                }else{
                    personalMovieDB.genres[i-1] = genre;
                }
            }

            personalMovieDB.genres.forEach((item, i) =>{
                console.log(`The favorite genre ${i +1} is: ${ item }`);
            })
            
            
        }


    };






































