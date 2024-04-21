function fn1() {
  console.log("i am first");
  setTimeout(() => {
    console.log("i am second");
    setTimeout(() => {
      console.log("i am third");
    }, 2000);
  }, 1000);
}
// fn1()

function fn2() {
  console.log("i am first");
  return new Promise((resolve) => {
    setTimeout(() => console.log("inside timeout"), 1000);
    resolve("promise resolved");
  });
}
// fn2().then((data)=>{
//     console.log(data)
// })
// console.log("at the end")

function promisifiedFunc(duration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
}

// let ans = promisifiedFunc(2000)
// console.log(ans)
// ans.then(function(){
//     console.log("promise is resolved")
// })

function getData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(id);
      resolve(1);
    }, 2000);
  });
}

// getData(1)
//   .then((data) => {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(data+2)
//             resolve(data+2)
//         }, 2000);
//     })
//   })
//   .then((data) => {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(data*2)
//             resolve(data*2)
//         }, 4000);
//     })
//   })
//   .then((data) => {
//     console.log(data);
//   });

// writing the same above thing using async and await
// async function dataCall() {
//   await getData(1);
//   await getData(2); // this will not run until getData(1) has been completed
//   await getData(3);
// }
// dataCall() // to avoid this unnecessary function call we can use IIFE , which is like this

// (async function () {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// })();


function sumOfSquares(a, b, fn) {
  let value1 = a * a;
  let value2 = b * b;
  fn(value1 + value2);
}

sumOfSquares(1, 2, function (value) {
  console.log(value);
});
// sumOfSquares(1, 2).then(function (value) {
//   console.log(value);
// });
