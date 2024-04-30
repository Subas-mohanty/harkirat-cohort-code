// interface User {
//   name : String,
//   age : number
// }

// const user1:User = {name : "subas" , age: 20}
// const user2 : User = {name : "pakal", age : 20}

// function sumOfAge(user1 : User, user2 : User) : number{
//   return user1.age + user2.age ;
// }

// const result = sumOfAge(user1, user2);
// console.log(result);


// there might be cases that we want to update a User in the database but we can't update all property , only some of them are need to be updated, so how can we do that

interface User {
  id : number,
  name : String,
  email : String,
  age : number,
  password : String,
}


// let's say we want to change only name and age and id, but how can we pass the values to the function

function updateUser(name : String, age : number, id : number){
  // we can do this but there might be cases that we have to change multiple things and it is not ideal to pass more arguments to a function as it gets ugly to read the code
}

// instead what we can do is, create an interface with all the properties that needs to be changed and pass that interface to the function

interface UpdateData{
  id : number,
  name : String,
  age : number
}

// now we can use this as an argument

function update(updateUser : UpdateData){
  // we can do this as well but what if we change the type of password from string to number then we have to change it in two place, for which we don't prefer this also instead we do something like below
}

// we can do like this
// creating a type of properties which needs to be change
type updateProps = Pick<User, "id" | "name" | "age">

function updateUser2(updateProps : updateProps){
  // 
}

const displayUserProfile = (user: updateProps) => {
  console.log(`Name: ${user.name}, age: ${user.age}`);
};

displayUserProfile({id : 12, name : "subas", age : 20})




// how do we take optional inputs, because the user may not give you all the values so to do that either we can create a new type marking all the valued as optional like this

type optionalVal = {
  id? : number,
  name? : String,
  age? : number
}


// but it arises the same problem that if we change anything in the main User interface then we have to change that here also, so the optimal approach is like this

type updateProps2 = Pick<User, "id" | "name" | "age">
type udateValOptional = Partial<updateProps2> // now it will partially select value from the updateProps2