type NumberArr = number[];

function maxValue(arr:NumberArr) { // we can do like this as well , arr : number[]
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));



interface User3 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User3[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));