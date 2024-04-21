// // defining type of variable
// const a: number = 34
// // a = "subas" // this will give an error but if a: any, then it will not give any error
// console.log(a);

// function greet(name: string){
//   console.log("Hello" + name);
// }
// greet("subas")


// function sum(a: number, b:number) : number{
//   return a+b;
// }
// const value = sum(1, 4);
// console.log(value);

// function isLegal(age: number) {
//   if (age > 18) return true;
//   return false;
// }

// console.log(isLegal(2));


// function first(second : ()=> void){ // ()=> void means the return type of this function is void and it doesn't take any argument
//   setTimeout(second, 1000);
// }

// function second(){
//   console.log("Inside second");
// }

// first(second);



// for objects the type declaration is like this

// we can define type like this but this is very bad 
function canMarry(user : {
  firstName : string;
  lastName : string; 
  age : number;
}){
  if(user.age > 18) return true;
  return false;
}

const user = {
  firstName : "subas",
  lastName : "mohanty",
  age : 21
}

console.log(canMarry(user));


function sayHello(user2 : User2){
  console.log("hello " + user.firstName); 
}
interface User2 {
  firstName: string, 
  lastName : string,
  age : number
  email?: string // optional , we can pass this value in the object or we can leave it unpassed
}
const user2 = {
  firstName : "subas",
  lastName : "mohanty",
  age : 21
}

sayHello(user2)
