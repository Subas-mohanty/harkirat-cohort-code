import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // create a todo application
  const [todos, setTodos] = useState([
    {
      title: "gym",
      description: "go to gym from 7-9",
      completed: "false",
    },
    {
      title: "DSA",
      description: "study DSA from 3-6",
      completed: "false",
    },
  ]);

  // although we can declare our state like this but this will not be picked up by react so we have to use the above syntax

  // let state = {
  //   count : 0,
  // }

  // jsx stands for javascript + xml, so we can't write html here
  // function onclickHandler() {
  //   // state.count = state.count + 1;
  //   // console.log(state.count);
  //   // count = count + 1 // we can't do like this in useState in react, we have to do something like this
  //
  //   setCount(count + 1);
  // }


  // we can use a simple for loop to do the rendering
  // let arr = [];
  // for (let i = 0; i < todos.length; i++) {
  //   arr.push(
  //     <Todos title={todos[i].title} description={todos[i].description}></Todos>
  //   )
  // }

  // maybe state can't be passed normally so we have to stringify that but the normal array can be passed without stringifying
  // return todos // give error
  // return JSON.stringify(todos)
  // return JSON.stringify(arr); // give error

  // return arr;

  function addTodo(){
    // this ...todos puts the todos arrays here and at the end push the new object which is passed
    setTodos([...todos, {
      title : "new todo",
      description : "new description"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      {/* {JSON.stringify(todos)}; // this will render all the todos in the page */}
      {/* <Todos title={todos[0].title} description={todos[0].description}></Todos> */}
      {/* <Todos title={todos[1].title} description={todos[1].description}></Todos> */}

      {todos.map((todo) => {
        return <Todos title={todo.title} description={todo.description}></Todos>
      })}
    </div>
  );

  // this is a component
  // the props is the state or the hook
  function CustomButton(props) {
    function onclickHandler() {
      props.setCount(count + 1);
    }
    return <button onClick={onclickHandler}>Conter {props.count}</button>;
  }

  function Todos(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    );
  }
}

export default App;


