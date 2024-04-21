class Student{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    static collegeName(){
        console.log("fm college");
    }
    printName(){
        console.log(this.name)
    }
    printage(){
        console.log(this.age)
    }
    printgender(){
        console.log(this.gender)
    }
}
let subu = new Student("subas", 21, "male")
console.log(subu.gender)
Student.collegeName()


// Date object
const date = new Date();
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth() + 1) // 0 based month so add 1 to see the actual month
console.log(date.getDay())
console.log(date.getUTCDate()) // only the date not month and year


// Math class

console.log(parseInt(Math.random() * 100))