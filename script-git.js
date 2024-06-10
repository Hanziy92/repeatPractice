



start();
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: () => {
      personalMovieDB.count = +prompt('Скільки ви подивились фільмів?', '');
   
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)  ) {
         personalMovieDB.count = +prompt('Скільки ви подивились фільмів?', '');
      }
   },
   remberMyFims: () => {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один із переглянутих  останніх фільмів,', '').trim(),
               b = prompt('На скільки його оцінюєте?', '').trim();  
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
      }
   },
   detectPersonalLevel: () => {
      if (personalMovieDB.count < 10) {
         console.log('Подивились мало фільмів');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('Ви класний глядач');
      } else if (personalMovieDB.count >= 30) {
         console.log('ви кіноман');
      } else {
         console.log('Error');
      };
   },
   writeYourGenres: () => {  
      for ( let i = 1; i <= 3; i++ ) {
         let genre = prompt(`Ваш любимий жанр під номером ${i}`).trim();

         if ( genre === '' || genre === null) {
            console.log('ви ввели некоретні дані');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }              
      }
   
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимий жанр ${i + 1} - це ${item}`);
      });            
   },

   showMyDB: (a) => {
      if (!a) {
         console.log(personalMovieDB);
        }
   },
   toggleVisibleMyDB: () => {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   }
};







































// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//        languages: ['ua', 'eng'],
//        programmingLangs: {
//            js: '20%',
//            php: '10%'
//        },
//        exp: '1 month'
//    },
//    showAgeAndLangs: function(plan) {
//       const {age} = plan;
//       const {languages} = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;
   
//       languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//       });
      
//          return str;
//    }
   
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience (plan) {
//     const {exp} = plan.skills;
//     return exp;  
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//    let str = '';
//    const {programmingLangs} = plan.skills;

//    for (let key in programmingLangs) {
//       str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//    }
//    return str;
// }

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    let str = '';
//    if (arr.length === 0) {
//       return str += 'famaly clear';
//    }
//    const newFamaly = arr.join(' ');
//    return `famali bulding ${newFamaly}`;
// }


// function standardizeStrings(arr) {
//    arr.forEach(lang => {
//       console.log(lang.toLowerCase());
//    });
// }
