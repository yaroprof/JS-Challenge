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



    if (personalMovieDB.count < 10){
        console.log('You are weak viewer ')
    }else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('You are common viewer')
    }else if ( personalMovieDB.count >= 30 ){
        console.log('You are movie buff')
    }else{
        console.log('Just Error!') }


console.log(personalMovieDB)



































