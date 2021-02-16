/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;

// Таблица личных данных.
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.start = function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", ` `);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", ` `);
    }
};

// Проверка.
personalMovieDB.rememberMyFilms = function () {
    let i = 0;
do {
    let lastMov = prompt ("Один из последних просмотренных фильмов ?", ""),
        mark = prompt ("На сколько оцените ?", ""); 
    if (lastMov != null && mark != null && lastMov != "" && mark != "" && lastMov.length < 50) {
        i++;
        personalMovieDB.movies[lastMov] = +mark;
    }else {
        i--;
    }
}
while (i < 2);
};

// Опросник.
personalMovieDB.detectPersonalLevel = function () {
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log ("Вы киноман");
    } else {
        console.log ("Произошла ошибка");
    }
};

// Вывод персональных данных.
personalMovieDB.showMyDB = function () {
    if (personalMovieDB.privat == false) {
        console.log (personalMovieDB);
    }else {
        console.log ("Your access is denied!");
    }
};

personalMovieDB.writeYourGenres = function () {
    for (let i = 1; i <= 3; i++) {
        const b = prompt(`Ваг любимый жанр под номером ${i}`, "");
        if (b != null && b != "") {
            personalMovieDB.genres[i - 1] = b;
        }else {
            i--;
        }
    }
    personalMovieDB.genres.forEach (function (item, i, genres){
        console.log (`Любимый жанр ${i+1} - это ${item}`);
    });
};

personalMovieDB.toggleVisibleMyDB = function () {
    if (personalMovieDB.privat == true) {
        personalMovieDB.privat = false;
    }else if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
        console.log (personalMovieDB.privat);
    }
};

// personalMovieDB.toggleVisibleMyDB ();
personalMovieDB.showMyDB ();
personalMovieDB.writeYourGenres ();