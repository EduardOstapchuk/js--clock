"use strict";

// // ---------Work 1
// function time() {
//   const clock = new Date();
//   const hours =
//     clock.getHours() < 10 ? "0" + clock.getHours() : clock.getHours();
//   const minutes =
//     clock.getMinutes() < 10 ? "0" + clock.getMinutes() : clock.getMinutes();
//   const seconds =
//     clock.getSeconds() < 10 ? "0" + clock.getSeconds() : clock.getSeconds();
//   document.body.innerText = hours + ":" + minutes + ":" + seconds;
// }
// setInterval(time, 1000);
// time()
// setInterval - вызываем функцию регулярно через определеный интервал времени(в данном случае каждую секунду)

// // -------Work --2

// // const deferred = setTimeout(() => {
// //   console.log("I'm a delayed function");
// // }, 3500);

// setTimeout -- вызываем функцию один раз через определенный интервал времени (в данном случае через 3.5 сек)

// // -------Work --3

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let last = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = last;
      }
    }
  }
  return arr;
};

const randomArr = () => {
  const res = [];
  for (let i = 1; i <= 1000; i++) {
    res.push(Math.ceil(-1000 + Math.random() * 2000));
  }
  return res;
};
randomArr();

let random10 = randomArr(),
  random100 = randomArr(),
  random1000 = randomArr();

random10.length = 10;
random100.length = 100;
random1000.length = 1000;

console.time("bubblesort10");
random10.sort((prev, next) => prev - next);
console.timeEnd("bubblesort10");
console.log(`length = ${random10.length} \n`);

console.time("bubblesort100");
random100.sort((prev, next) => prev - next);
console.timeEnd("bubblesort100");
console.log(`length = ${random100.length} \n`);

console.time("bubblesort1000");
random1000.sort((prev, next) => prev - next);
console.timeEnd("bubblesort1000");
console.log(`length = ${random1000.length} \n`);
