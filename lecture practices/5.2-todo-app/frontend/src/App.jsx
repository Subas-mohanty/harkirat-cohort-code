import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";

// to deploy
// render network for backend
// vercel for frontend

function App() {
  const [todos, setTodos] = useState([]);

  // this will make infinite call because we are updating todos inside this, and whenever todos got updated App will re-render and again the fetch will be called. This is why we use useEffect
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const data = await res.json();
  //   // console.log(data.todos);
  //   setTodos(data.todos);
  // });

  useEffect(
    () => {
      setInterval(() => {
        fetch("http://localhost:3000/todos").then(async (res) => {
          const data = await res.json();
          setTodos(data.todos);
        });
      }, 5000);
    },
    [] // this is called a dependency array, it takes props as an element, and when that element value changes it re-renders the page
  );
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
