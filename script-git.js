const numberOfFilms = +prompt('Скількт фільмів ви подивились', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   const a = prompt('Один із переглянутих  останніх фільмів,', ''),
         b = prompt('На скільки його оцінюєте?', '');  
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
   } else {
      i--;
   }
};

if (personalMovieDB.count < 10) {
   console.log('Подивились мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('Ви класний глядач');
} else if (personalMovieDB.count >= 30) {
   console.log('ви кіноман');
} else {
   console.log('Error');
};


console.log(personalMovieDB);




