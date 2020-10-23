/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания



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





































