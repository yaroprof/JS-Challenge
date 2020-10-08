const numberOfFilms = +prompt('How much films are yoy see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a  = prompt('Your of the last films?', ''),
        b = prompt('Your rating?', ''),
        c  = prompt('Your of the last films?', ''),
        d = prompt('Your rating?', '');



    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB)