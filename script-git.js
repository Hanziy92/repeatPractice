'use strict';

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


// function pow(a, b) {
//    if (b === 1) {
//       return a;
//    } else {
//       return a * pow(a, b - 1);
//    }
// };

// console.log(pow(2, 3));


// let studets = {
//    js: [{
//       name: 'Jonh',
//       progress: 100
//    }, {
//       name: 'Petro',
//       progress: 60
//    }],

//    html: {
//       basic: [{
//          name: 'Sofia',
//          progress: 20
//       }, {
//          name: 'Ann',
//          progress: 18
//       }],

//       pro: [{
//          name: 'Sam',
//          progress: 10
//       }],
//       semi: {
//          studets: [{
//             name: 'Test',
//             progress: 100
//          }]
//       }
//    }
// };

// function getTotatlProgressByIteration(data) {
//    let totalProgress = 0;
//    let studets = 0;

//    for (let course of Object.values(data)) {
//       if (Array.isArray(course)) {
//          studets += course.length;
//          for (let i = 0; i < course.length; i++) {
//             totalProgress += course[i].progress;
//          }
//       } else {
//          for (let subCourse of Object.values(course)) {
//             studets += subCourse.length;
//             for (let i = 0; i < subCourse.length; i++) {
//                totalProgress += subCourse[i].progress;
//             }
//          }
//       }
//    }

//    return totalProgress / studets;
// };

// console.log(getTotatlProgressByIteration(studets));




// function getTotatlProgressByRecorsion(data) {
//    if (Array.isArray(data)) {
//       let total = 0;
//       for (let i = 0; i < data.length; i++) {
//          total += data[i].progress;
//       }

//       return [total, data.length];
//    } else {
//       let total = [0, 0];
//       for (let subData of Object.values(data)) {
//         const subdataArray =  getTotatlProgressByRecorsion(subData);
//         total[0] += subdataArray[0];
//         total[1] += subdataArray[1];
//       }
//       return total;
//    }
// };

// const result = getTotatlProgressByRecorsion(studets);

// console.log(result[0] / result[1]);


// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// console.log(btns[1].classList.add('red'));
// if (btns[1].classList.contains('red')) {
//    console.log('red');
// }

// btns[0].addEventListener('click', () => {
//    if (!btns[1].classList.contains('red')) {
//       btns[1].classList.add('red');
//       } else {
//          btns[1].classList.remove('red');
//       }
// });


// wrapper.addEventListener('click', (e) => {
//    if (e.target && e.target.classList.contains('blue ')) {
//       console.log('Hello');
//    }
// });

// wrapper.addEventListener('click', (e) => {
//    if (e.target && e.target.tagName == "BUTTON") {
//       console.log('Hello');
//    }
// });
// wrapper.addEventListener('click', (e) => {
//    if (e.target && e.target.matches('button.red')) {
//       console.log('Hello');
//    }
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//    if (box.matches('.this')) console.log(box );  
// });

// console.log(boxesQuery[0].closest('.wrapper'));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//    const div = document.createElement('div');
//    div.classList.add('box');
//    document.body.append(div);
// }

// console.log(boxesQuery);
// console.log(boxesGet);

// console.log(Array.from(boxesGet));


// const obj = {
//    name: 'Test',
//    [Symbol('id')]: 1
// }

// for (let value in obj) console.log(value);

// console.log(obj);

   
// let id = Symbol();
// let id = Symbol("id");

// obj[id] = 1;

// console.log(obj[id]);



// const obj = {
//       name: 'Test',
//       [ Symbol("id")]: 1,
//       getId: function () {
//          return this[id];
//       }
//    }
   
//    // console.log(obj.getId());
//    console.log(Object.getOwnPropertySymbols(obj));
//    console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);


// const myAwesomeDB = {
//       monies: [],
//       actors: [],
//       [Symbol('id')]: 2
// }


// // код бібліотеки

// myAwesomeDB.id ='32324234';

// console.log(myAwesomeDB.id);
// console.log(myAwesomeDB);


// const user = {
//    name: 'Alex',
//    surname: 'Smith',
//    birthday: '20/04/1998',
//    showMyPublicData: function() {
//          console.log(`${this.name} ${this.surname}`);
//    }
// }

// Object.defineProperty(user, 'birthday', {writable: false});

// const user = {
//    name: 'Alex',
//    surname: 'Smith',
//    showMyPublicData: function() {
//          console.log(`${this.name} ${this.surname}`);
//    }
// }

// Object.defineProperty(user, 'birthday', {value: prompt('Date?', ''), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

// Object.defineProperties(user, {
//    name: {writable: false},
//    surname: {enumerable: false}
// }); 


// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'}); 

// writable
//enumerable
//configurable


// const shops = [
//    {rice: 500},
//    {oil: 200},
//    {bread: 50}
// ];

// const budget = [500, 1200, 1800];

// const map = new Map();

// shops.forEach((item, i) => {
//    map.set(item, budget[i]);
// });

// map.set(shops[0], 500)
//    .set(shops[1], 1200)
//    .set(shops[2], 1800);


// console.log(map.get(shops[0])); // 500
// console.log(map.has(shops[0])); // true

// map.delete(kye); //  видаляє
// map.clear(); // очищає весю мапу
// console.log(map.size); // скіки обєктів в мапі


// const shops = [
//       {rice: 500},
//       {oil: 200},
//       {bread: 50}
//    ];
   
//    const budget = [500, 1200, 1800];
   
//    const map = new Map([
//       [{paper: 400}, 8000]
//    ]);
   
//    shops.forEach((item, i) => {
//       map.set(item, budget[i]);
//    });
   
// const goods = [];

//    for (let shop of map.keys()) {
//       goods.push(Object.keys(shop)[0]); 
//    }

// console.log(goods);

// for (let price of map.values()) {
//    console.log(price);
// }

// for (let {shop, price} of map.entries()) {
//    console.log(shop, price);
// }

// map.forEach((value, key, map) => {
//    console.log(key, value);
// });


// const user = {
//    name: 'Alex',
//    surname: 'Smith',
//    showMyPublicData: function() {
//          console.log(`${this.name} ${this.surname}`);
//    }
// }

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newObjectUser = Object.fromEntries(userMap);
// console.log(newObjectUser);

// const arr = [1, 1, 2, 3, 4, 5, 6, 5];
// const set = new Set(arr);
// console.log(set); 

// const students = ['Olga', 'Petro', 'Sofia', 'Petro'];

// function unique(arr) {
//    return Array.from(new Set(arr));
// }

// const result = unique(students);

// console.log(result);

// const set = new Set(students);
// set.add('Anna')
//    .add('Olga');

// console.log(set);


// set.delete(value);
// set.has(value);
// set.clear();
// set.siz;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) => {
//    console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());


// const bigNum = 5465465321321654651321216848151321321651652165165121658465416n;

// const bsgNumTwo = BigInt(4648986516519845621651632565654652132132165465146);

// const bigint = 1n;
// const number = 2;

// console.log(bigint + BigInt(number));
// console.log(Number(bigint) + number);

// const timeId = setTimeout(function(text) {
//    console.log(text);
// }, 2000, 'Hello');


// const btn = document.querySelector('.btn');
// // let twoTime,
// //     i = 0;

// function myAnimation() {
//    const elem = document.querySelector('.box');
//    let pos = 0;
//    const id = setInterval(frame, 10);
//    function frame() {
//       if (pos == 300) {
//          clearInterval(id);
//       } else {
//          pos++
//          elem.style.top = pos + 'px';
//          elem.style.left = pos + 'px';
//       }
//    }
// }

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//    // const twoTime = setTimeout(logger, 2000);
//    twoTime = setInterval(logger, 500);
  
// });

// function logger () {
//    if (i === 3) {
//       clearInterval(twoTime);
//    }
//    console.log('text');
//    i++;
// }


// const now = new Date();
// const nowTwo = new Date(2024, 5, 1, 20);

// console.log(now);

// const now = new Date();
// new Date.parse('2020-05-01');
 
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// now.setHours(18);
// console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//    let some = i ** 3;
// }

// let and = new Date();

// alert(`цикл відпрацював за ${and - start} мілісекунд`);



// const box = document.querySelector('.box');
// const btn = document.querySelector('button');
// const width = box.clientWidth;
// const heigth = box.clientHeight;
// const width = box.offsetWidth;
// const heigth = box.offesttHeight;
// const heigth = box.scrollHeightt;

// console.log(width, heigth);

   // btn.addEventListener('click', () => {
   //    box.style.heigth = box.scrollHeight + 'px';
   //    console.log(box.scrollTop);
   // }); 

   // console.log(box.getBoundingClientRect());
   // console.log(box.getBoundingClientRect().top);

   // const style = window.getComputedStyle(box);

   // console.log(document.documentElement.scrollTop);

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//       console.log(`Hello ${this.name}`);
//    };
// }

// User.prototype.exit = function(name) {
//    console.log(`User ${this.name} exit`);
// }
 
// alex.exit();

// const petro = new User('Petro', 32);
// const alex = new User('Alex', 28);   

// alex.name = 'jonh';
// petro.hello();
// alex.hello();

// console.log(petro);
// console.log(alex);

// function showThis() {
//    console.log(this);
// }
// showThis();
 
// function showThis(a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a + b;
//    }
//    console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//       console.log(this);
//    }
// }

// console.log(obj);

// function sayName() {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: "Jonh"
// };

// sayName.call(user, 'Smith'); 
// sayName.apply(user, ['Smith']);


// function count(num) {
//    return this*num;
// }

// const double = count.bind(2);

// console.log(double(3)); 
// console.log(double(13));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//    this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', () => {
//    this.style.backgroundColor = 'red';
// });


// const obj = {
//    num: 5,
//    sayNamber: function() {
//       const say = () => {
//          console.log(this);
//       };
//       say();
//    }
// }

// obj.sayNamber();

// const double = a => a * 2;
// console.log(double(4));

   // class Rectangle {
   //    constructor(heigth, width) {
   //       this.heigth = heigth;
   //       this.width = width;
   //    }

   //    calcAea() {
   //       return this.heigth * this.width;
   //    }
   // }

   // class ColorRectangleWithText extends Rectangle {
   //    constructor(heigth, width, text, bgColor) {
   //       super(heigth, width);
   //       this.text = text;
   //       this.bgColor = bgColor; 
   //    }

   //    showMyProps() {
   //       console.log(`Text: ${this.text}, color: ${this.bgColor}`);
   //    }
   // }

   // const div = new ColorRectangleWithText(25, 10, 'Hello Word', 'red');
   // div.showMyProps();
   // console.log(div.calcAea());

   // const squera = new Rectangle(10, 10);
   // const long = new Rectangle(20, 100);

   // console.log(squera.calcAea());
   // console.log(long.calcAea());


   // const log = function(a, b, ...rest) {
   //    console.log(a, b, rest);
   // }


   // log('bs', 'rest', 'opetr', 'user');

   // function calcOrDuble(num, basis = 2) {
   //    console.log(num * basis);
   // } 

   // calcOrDuble(3, 5);
   // calcOrDuble(3);



   // const persone = {
   //    name: 'Alex',
   //    tel: '+3832452354'
   // };

   //  console.log(JSON.stringify(persone));
   //  console.log(JSON.parse(JSON.stringify(persone)));

   //  const persone = {
   //    name: 'Alex',
   //    tel: '+3832452354',
   //    parents: {
   //       mom: 'Olga',
   //       dad: 'Michel'
   //    }
   // };

   // const clone = JSON.parse(JSON.stringify(persone));

   // clone.parents.mom = 'sofia';

   // console.log(persone);
   // console.log(clone);

   // const inputUah = document.querySelector('#uah'),
   //       inputUsd = document.querySelector('#usd');

   // inputUah.addEventListener('input', () => {
   //    const request = new XMLHttpRequest();

   //    request.open('GET', 'current.json');
   //    request.setRequestHeader('Content-type', 'application/json; charset=uft-8');
   //    request.send();

   //    request.addEventListener('readystatechange', () => {
   //       if (request.readyState === 4 && request.status === 200 ) {
   //          console.log(request.response);
   //          const data = JSON.parse(request.response);
   //          inputUsd.value = (+inputUah.value * data.current.usd).toFixed(2); 
   //       } else {
   //          inputUsd.value = 'Щось пішло не так';
   //       }
   //    });

   // });





   // console.log('GET data');

   // const req = new Promise(function(resolve, reject) {
   //    setTimeout(() => {
   //       console.log('loading....');
   //       const prod = {
   //          name: 'TV',
   //          price: 200
   //       }
   //      resolve(prod);
   //    }, 2000);
   // });

   // req.then(prod => {
   //    return new Promise((resolve, reject) => {
   //       setTimeout(() => {
   //          prod.status = 'order';
   //          resolve(prod);
   //       }, 2000);
   //    }).then(data => {
   //       data.modify = true;
   //       return data;         
   //    }).then((data) => {
   //       console.log(data);
   //    }).catch(() => {
   //       console.log('error');
   //    }).finally(() => {
   //       console.log('finally');
   //    });  
   // });

   // const test = time => {
   //    return new Promise((resolve, reject) => {
   //       setTimeout(() => resolve(), time);
   //    });
   // }

   // test(1000).then(() => {
   //    console.log('1000 ms');
   // });
   // test(2000).then(() => {
   //    console.log('2000 ms');
   // });

   // Promise.all([test(1000), test(2000)]).then(() => {
   //    console.log('All');
   // });
   // Promise.race([test(1000), test(2000)]).then(() => {
   //    console.log('All');
   // });


//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(response => response.json())
//    .then(json => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//    method: "POST",
//    body: JSON.stringify({name: 'Alex'}),
//    headers: {
//       'Content-type': 'applicatiom/json'
//    }
// })
//    .then(response => response.json())
//    .then(json => console.log(json));
