function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}
let ans = sumOfSquares(1, 2);
console.log(ans);

function sumOfSquares2(a, b, fn) {
//   let value1 = fn(a);
//   let value2 = fn(b);
//   return value1 + value2;
return a+b
}
let ans2 = sumOfSquares2(0, 2);
console.log(ans2);
