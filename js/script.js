"use strict";

const questFirst = prompt("Сколько фильмов вы уже посмотрели ?", ` `);
let numberOfFilms = +questFirst;


// Личные данные
let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


// Опросник
let i = 1;

do {
    const lastMov = prompt ("Один из последних просмотренных фильмов ?", ""),
            mark = prompt ("На сколько оцените ?", "");
    personaMovieDB.movies[lastMov] = +mark;
    i++;
}
while (i == 2);

console.log (personaMovieDB);