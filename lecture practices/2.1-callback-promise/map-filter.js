let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}
console.log();

let values = arr.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
  // console.log(element)
  return num; // this will give undefined because we can't return anything in the forEach loop
});
// console.log(values) // undefined
// to solve this problem we have maps and filters

console.log();

// in map() you can do any task you want
let values2 = arr.map((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
  return num;
});
console.log(values2);

// in filter you can give a condition and it will return the values satisfying the condition
let values3 = arr.filter((num) => {
  return num > 5;
});
console.log(values3);