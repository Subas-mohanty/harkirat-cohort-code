/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){

  }
  arr = []
  add(s){
    this.arr.push(s);
  }
  remove(i){
    this.arr.pop(i);
  }
  update(index, t){
    this.arr[index] = t;
  }
  getAll(){
    return this.arr;
  }
  get(i){
    return arr[i];
  }
  clear(){
    arr = []
  }
}

module.exports = Todo;
