/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", ` `);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", ` `);
    }
}

// start ();


// Таблица личных данных.
let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// Проверка.
function rememberMyFilms () {
    let i = 0;
do {
    let lastMov = prompt ("Один из последних просмотренных фильмов ?", ""),
        mark = prompt ("На сколько оцените ?", ""); 
    if (lastMov != null && mark != null && lastMov != "" && mark != "" && lastMov.length < 50) {
        i++;
        personaMovieDB.movies[lastMov] = +mark;
    }else {
        i--;
    }
}
while (i < 2);
}

// rememberMyFilms ();

// Опросник.
function detectPersonalLevel () {
    if (personaMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (10 <= personaMovieDB.count <= 30) {
        console.log ("Вы классический зритель");
    } else if (personaMovieDB.count > 30) {
        console.log ("Вы киноман");
    } else {
        console.log ("Произошла ошибка");
    }
}

// detectPersonalLevel ();

// Вывод персональных данных.
function showMyDB () {
    if (personaMovieDB.privat == false) {
        console.log (personaMovieDB);
    }else {
        console.log ("Your access is denied!");
    }
}

 showMyDB ();
 
function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const b = prompt(`Ваг любимый жанр под номером ${i}`, "");
        personaMovieDB.genres[i - 1] = b;
    }
}

writeYourGenres ();