const { log } = require("console");
const fs = require("fs")
function hello(){
    console.log("hello world !");
}
// setTimeout(hello, 2000);
// console.log("hello after set timeout")
function greet(fn){
    const file = fs.readFile("async.txt", "utf-8", (err, data)=>{
        fn(data)
    })
}
// let file2 = fs.readFileSync("./sync.txt", "utf-8");

// console.log(file)
// console.log(file2);

console.log("hello")
let a = 0;
for(let i = 0; i< 100345350; i++){
    a += i;
}
console.log(a)
// console.log("hii later")

function done(data){
    console.log(data)
}
greet(done)
console.log("i am at last")