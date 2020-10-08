/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


/*
const numberOfFilms = +prompt('How much films did yoy see?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };



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

    if (personalMovieDB.count < 10){
        console.log('You are weak viewer ')
        }else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log('You are common viewer')
        }else if ( personalMovieDB.count >= 30 ){
            console.log('You are movie buff')
        }else{
        console.log('Just Error!') }


console.log(personalMovieDB)

 */


    const numberOfFilms = prompt('How films did you see?', '');

    const personalMovieBD = {
        count: numberOfFilms,
        movies: {}
    }

    // --- while - case
/*
    let i= 0
    while( i < 2  ){
        const a = prompt('What the films you see last time?', ''),
            b = prompt('Rating please', '');

        i++;

        if(a != null && b != null && a != '' && b != ''&& personalMovieBD.count < 50 ){
            console.log('Done')

           personalMovieBD.movies[a] = b
        } else {
            console.log('Error');
            i--
        }

    }


 */

    // --- do while case

    let i=0;

    do{
        const a = prompt('What the films you see last time?', ''),
            b = prompt('Rating please', '');

        i++;

        if (a != null && b != null && a !='' && b !='' && personalMovieBD.count < 50){
            console.log('Done');

            personalMovieBD.movies[a] =b;
        }else {
            console.log('Error')
            i--;
        }



    }while (i<2);



    if (numberOfFilms < 10){
        console.log('Loser')
    }else if (numberOfFilms > 10 && numberOfFilms < 30){
        console.log('Medium')
    }else if(numberOfFilms > 30){
        console.log('Monster')
    }else {
        console.log('Error')
    }


    console.log(personalMovieBD )

























