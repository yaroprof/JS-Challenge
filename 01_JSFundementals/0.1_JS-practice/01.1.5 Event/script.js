/* Задание на урок:


1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
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






































