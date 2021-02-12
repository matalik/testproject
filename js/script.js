/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const questFirst = +prompt("Сколько фильмов вы уже посмотрели ?", ` `);
let numberOfFilms = questFirst;

// Таблица личных данных
let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// Проверка
if (personaMovieDB.count < 10) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (10 <= personaMovieDB.count <= 30) {
    console.log ("Вы классический зритель");
} else if (personaMovieDB.count > 30) {
    console.log ("Вы киноман");
} else {
    console.log ("Произошла ошибка");
}

// Опросник
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

console.log (personaMovieDB);