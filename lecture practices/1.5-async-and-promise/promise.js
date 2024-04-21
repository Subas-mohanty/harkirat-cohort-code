// const fs = require("fs");

// // withour promise
// function fileRead(fn) {
//   fs.readFile("async.txt", "utf-8", (err, data) => {
//     fn(data); // resolve is the function that we pass in the .then() argument
//   });
// }

// function print(data) {
//   console.log(data);
// }

// // fileRead(print)

// // with promises
// function fileRead2() {
//   return new Promise(function (resolve) {
//     fs.readFile("async.txt", "utf-8", (err, data) => {
//       resolve(data); // resolve is the function that we pass in the .then() argument
//       return new Promise(function (r) {
//         r();
//       });
//     });
//   });
// }

// function print(data) {
//   console.log(data);
// }
// function fn() {
//   console.log("i am in the internal promise");
// }
// // fileRead2().then(print).then(fn)

let p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("promise resolved");
  }, 2000);
});
// if the ondone function doesn't take any parameter still the code will run without any error
function onDone(d) {
  // console.log("i am inside ondone");
  console.log(d + " by subu")
}
console.log(p);
p.then(onDone);

// // another example of promise
// function kiratsAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     resolve("hi there");
//   });
//   return p;
// }
// const value = kiratsAsyncFunction();
// value.then(function (data) {
//   console.log(data);
// });

// function kiratsAsyncFunction(callback) {
//   // do some async logic here
//   callback("ht there!");
// }
// function main() {
//   kiratsAsyncFunction(function (value) {
//     console.log(value);
//   });
// }
// main();

// // OR

// function kiratsAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     // do some async logic here
//     setTimeout(function(){
//         resolve("hi there!");
//     },3000); 
//   });
//   return p;
// }
// function main() {
//   kiratsAsyncFunction().then(function (value) {
//     console.log(value);
//   });
//   console.log("hi there 1")
// }
// main();

// // OR

function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function(){
        resolve("hi there!");
    },3000); 
  });
  return p;
}
async function main() {
    // no callbacks , no .then syntax
    const value = await kiratsAsyncFunction();
    console.log("hi there 1") // this will not run until the promise is resolved because there might be usecases where we will be using the variable value somewhere below in this function , so if the below code runs immedietly then it will give error because value doesn't contain anything
    console.log(value);
}
main();
console.log("After main")


// in js this is totally fine that you declare a function that takes no parameter but you can call it with an argument it will run without any error
function fun(){
  console.log("hello man")
}
fun("subas")