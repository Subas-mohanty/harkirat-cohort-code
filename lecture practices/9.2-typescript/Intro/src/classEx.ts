// this interface and class is just like java, which is only present in typescript and not in javascript, we have to implement all the methods present in interface in the class , everything is like java
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee2 implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
  }

  greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
  }
}