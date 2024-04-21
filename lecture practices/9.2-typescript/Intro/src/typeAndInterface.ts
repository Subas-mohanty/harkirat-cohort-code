// what is the difference between type and interface ?
// ans : The difference between interface and type is a type can't be implemeted by a class, and in type we can use, or (union) and and (intersection) but in type we can't do that and syntactically they are only differ by an equal sign,
type User = {
  firstName: string,
  lastName: string,
  age: number
}

interface User2 {
  firstName: string,
  lastName: string,
  age: number
}
function greet2(user: User) { // we can use , user : User2 as well , 

}


type GreetArg = number | string | boolean;
function greet(id: GreetArg) { // we can also do like this, id:(number || string || boolean)
}
greet(1);
greet("1");



type Employee = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
};

type TechLead = Employee & Manager;
// we can do like this as well
// type TechLead = {
//   name : string,
//   startDate : Date,
//   department : string
// }

const t: TechLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "asdasd"
}


// we can't do this in types
interface x {
  name : string
}
interface y {
  age : number 
}

interface xy extends x, y{
  time : Date
}
