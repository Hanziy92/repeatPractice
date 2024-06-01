
let numberOfFilms;
function start() {
   numberOfFilms = prompt('Скількт фільмів ви подивились', '');

   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Скількт фільмів ви подивились', '');
   }
}

start();
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

function remberMyFims() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один із переглянутих  останніх фільмів,', ''),
            b = prompt('На скільки його оцінюєте?', '');  
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         i--;
      }
   }
}
remberMyFims();


function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Подивились мало фільмів');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Ви класний глядач');
   } else if (personalMovieDB.count >= 30) {
      console.log('ви кіноман');
   } else {
      console.log('Error');
   };
};
detectPersonalLevel();

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) { 
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр під номером ${i}`);
   }
}

writeYourGenres();

function showMyDB(a) {
   if (!a) {
    console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);



