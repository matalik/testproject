"use strict";
const questFirst = prompt("Сколько фильмов вы уже посмотрели ?", ` `);
let numberOfFilms = questFirst;

const questSecond = prompt ("Один из последних просмотренных фильмов ?", "");
const questTherd = prompt ("На сколько оцените ?", "");
const questForth = prompt ("Один из последних просмотренных фильмов ?", "");
const questFifth = prompt ("На сколько оцените ?", "");


let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personaMovieDB.movies[questSecond] = questTherd;
personaMovieDB.movies[questForth] = questFifth;

console.log (personaMovieDB);