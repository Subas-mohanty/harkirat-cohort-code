const obj = {
  name : "subas",
  age : 20,
  gender : "male"
}

obj.name = "subu" // this is not wrong because obj is declared as const but we are not changing its reference but we are changing its internal value

console.log(obj.name);


// if we want to not allow to change the internal value as well we can use readonly

type User2 ={
  readonly name : String,
  readonly age : number
}

// instead of writting readonly again and again we can do like this
// const user : Readonly<User2> 
const user : User2 = {
  name : "subas",
  age : 20
}

// user.name = "subu"; // is giving error because the property is declared as read only
