"use strict";

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//    start: () => {
//       personalMovieDB.count = +prompt('Скільки ви подивились фільмів?', '');
   
//       while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)  ) {
//          personalMovieDB.count = +prompt('Скільки ви подивились фільмів?', '');
//       }
//    },
//    remberMyFims: () => {
//       for (let i = 0; i < 2; i++) {
//          const a = prompt('Один із переглянутих  останніх фільмів,', '').trim(),
//                b = prompt('На скільки його оцінюєте?', '').trim();  
//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//          } else {
//             i--;
//          }
//       }
//    },
//    detectPersonalLevel: () => {
//       if (personalMovieDB.count < 10) {
//          console.log('Подивились мало фільмів');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          console.log('Ви класний глядач');
//       } else if (personalMovieDB.count >= 30) {
//          console.log('ви кіноман');
//       } else {
//          console.log('Error');
//       };
//    },
//    writeYourGenres: () => {  
//       for ( let i = 1; i <= 3; i++ ) {
//          let genre = prompt(`Ваш любимий жанр під номером ${i}`).trim();

//          if ( genre === '' || genre === null) {
//             console.log('ви ввели некоретні дані');
//             i--;
//          } else {
//             personalMovieDB.genres[i - 1] = genre;
//          }              
//       }
   
//       personalMovieDB.genres.forEach((item, i) => {
//          console.log(`Любимий жанр ${i + 1} - це ${item}`);
//       });            
//    },

//    showMyDB: (a) => {
//       if (!a) {
//          console.log(personalMovieDB);
//         }
//    },
//    toggleVisibleMyDB: () => {
//       if (personalMovieDB.privat) {
//          personalMovieDB.privat = false;
//       } else {
//          personalMovieDB.privat = true;
//       }
//    }
// };

// personalMovieDB.start();
// // personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);



const overlay = document.querySelector('.overlay'),
      btn = overlay.querySelectorAll('button');

// // btn.onclick = function () {
// //    alert('Click');
// // }; // Недоречний

// btn[0].addEventListener('click', () => {
//    alert('Click');
// });

// btn[0].addEventListener('click', () => {
//    alert('Second click');
// }); // не перебиває попередню дію

// btn[1].addEventListener('mouseenter', (e) => {
//    // console.log('Click');
//    console.log(e);
// }); // дані про обєкт event скорочено e

// btn[2].addEventListener('click', (e) => {
//    e.target.remove();
//    console.log(e);
// });



// let i = 0;
// const deleteElement = (e) => {
//    console.log(e.target);
//    i++;
//    if(i == 2) {
//       btn[0].removeEventListener('click', deleteElement);
//    }
// };

// btn[0].addEventListener('click', deleteElement);

const deleteElement = (e) => {
      console.log(e.target);
      console.log(e.type);
     
};

btn[0].addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');
link.addEventListener('click', (e) => {
   e.preventDefault();

   console.log(e.target);
});
