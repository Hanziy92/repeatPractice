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



// const overlay = document.querySelector('.overlay'),
//       btn = document.querySelectorAll('button');

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

// const deleteElement = (e) => {
//       console.log(e.target);
//       console.log(e.type);
     
// };

// btn[0].addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//    e.preventDefault();

//    console.log(e.target);
// });

// btn.forEach(item => {
//    item.addEventListener('click', () => {
//       console.log('hi');
//    }, {once: true});
// });



// console.log(document.body.childNodes); // получаєм псевдо масив всіх  батьківських елементів
// console.log(document.body.firstChild);
// console.log(document.body.lastdNodes); 

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('[data-current = "3"]').nextSibling);
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling);
// console.log(document.body.firstElementChild);

// for (let node of document.body.childNodes) {
//    if (node.nodeName == '#text') {
//       continue;
//    } else {
//       console.log(node);
//    }
// }


function pow(a, b) {
   if (b === 1) {
      return a;
   } else {
      return a * pow(a, b - 1);
   }
};

console.log(pow(2, 3));


let studets = {
   js: [{
      name: 'Jonh',
      progress: 100
   }, {
      name: 'Petro',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Sofia',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }],
      semi: {
         studets: [{
            name: 'Test',
            progress: 100
         }]
      }
   }
};

function getTotatlProgressByIteration(data) {
   let totalProgress = 0;
   let studets = 0;

   for (let course of Object.values(data)) {
      if (Array.isArray(course)) {
         studets += course.length;
         for (let i = 0; i < course.length; i++) {
            totalProgress += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            studets += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
               totalProgress += subCourse[i].progress;
            }
         }
      }
   }

   return totalProgress / studets;
};

// console.log(getTotatlProgressByIteration(studets));




function getTotatlProgressByRecorsion(data) {
   if (Array.isArray(data)) {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }

      return [total, data.length];
   } else {
      let total = [0, 0];
      for (let subData of Object.values(data)) {
        const subdataArray =  getTotatlProgressByRecorsion(subData);
        total[0] += subdataArray[0];
        total[1] += subdataArray[1];
      }
      return total;
   }
};

const result = getTotatlProgressByRecorsion(studets);

console.log(result[0] / result[1]);