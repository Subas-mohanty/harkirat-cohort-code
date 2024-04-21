// json - javascript object notation

const users = '{"name" : "subas", "age" : "21"}'
// there are two functions which can be used in JSON
// JSON.parse --> converts string to object
// JSON.stringify --> converts object to string 

const user = JSON.parse(users)
// console.log(user.name)

const obj = {
    name: "subu",
    age: 21,
    gender: "male"
}
let string = JSON.stringify(obj)
console.log(string)

console.log(JSON.parse(string))