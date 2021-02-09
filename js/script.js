"use strict";
const questFirst = prompt("Сколько фильмов вы уже посмотрели ?", ` `);
let numberOfFilms = questFirst;

const questSecond = prompt ("Один из последних просмотренных фильмов ?", "");
const filmNameFirst = questSecond;
const questTherd = prompt ("На сколько оцените ?", "");
const filmMarkFirst = questTherd;

const questForth = prompt ("Один из последних просмотренных фильмов ?", "");
const filmNameSecond = questForth;
const questFifth = prompt ("На сколько оцените ?", "");
const filmMarkSecond = questFifth;

let moviesAll = {
    filmNameFirst: filmMarkFirst,
    filmNameSecond: filmMarkSecond,
};
let actorsAll ={};
let genresAll =[];
let privatAnswer = !true;

let personaMovieDB = {
    count: numberOfFilms,
    movies: moviesAll,
    actors: actorsAll,
    genres: genresAll,
    privat: privatAnswer,
};

console.log (personaMovieDB);