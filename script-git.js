const numberOfFilms = +prompt('Скількт фільмів ви подивились', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один із переглянутих  останніх фільмів,', '');
const b = prompt('На скільки його оцінюєте?', '');
const c = prompt('Один із переглянутих останніх фільмів?', '');
const d = prompt('На скільки його оцінюєте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);