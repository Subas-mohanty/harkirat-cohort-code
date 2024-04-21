import React, { useEffect, useState } from "react";
import axios from "axios";

function CustomHook() {
  const [todos, loading] = useTodos(5); // we can give any name to custom hook but for good naming convention we use , "use" in the start of the name

  if (loading) return "loading...";
  // console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }) {
  // console.log(todo.title);
  return (
    <div>
      {todo.id}
      <div></div>
      {todo.title}
      <div></div>
      {todo.description}
      <div></div>
    </div>
  );
}
export default CustomHook;

// custom hook
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // here may have a doubt that if useEffect runs only one time then how this fetch call getting again and again, so the answer is yes this useEffect call is happening when the n changes but the function inside this setInterval function is running after every n second
  useEffect(() => {
    // this will run after every five seconds
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    // this will run when n changes 
    axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
      setTodos(response.data.todos);
      setLoading(false);
    });

    // this will clear the interval so that if n changes this also make request after n seconds otherwise it will make the request after every n seconds that was set before, if n is a constant it doesn't make any sense but if n is a state then this is useful
    return ()=>{
      clearInterval(value);
    }
  }, [n]);

  // this is wrong , we can't await useEffect, we can do that by using an immediately invoked function inside useEffect
  // const response = await axios.get("https://sum-server.100xdevs.com/todos")
  // setTodos(response.data.todos);
  // }, [])
  return [todos, loading];
}
