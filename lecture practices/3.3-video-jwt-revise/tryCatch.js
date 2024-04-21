try {
  let a;
  console.log(a.length);
  console.log("hi there from inside"); // this will never be executed
} catch (e) {
  console.log("inside catch statement");
}
// try catch syntax
console.log("hi there");
