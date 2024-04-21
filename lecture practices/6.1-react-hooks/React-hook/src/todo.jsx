import { useState } from "react";

let counter = 4;

function Todo(){
    // let counter = 4; // putting the counter here will not update the value
    const [todos, setTodos] = useState([
        {
            id : 1,
            title : "Gym",
            description : "Go to gym"
        },
        {
            id : 2,
            title : "Stydy",
            description : "Learn a new thing"
        },
        {
            id : 3,
            title : "Think",
            description : "Think about great ideas"
        }
    ]);

    // we don't have to pass todos and setTodos here because it can use directly
    function addTodo(){

        setTodos([...todos, {
            id : counter++,
            title : "new todo",
            description : "new todo description"
        }])

        // const newTodos = [];
        // for(let i = 0; i<todos.length; i++){
        //     newTodos.push(todos[i])
        // }
        // newTodos.push({
        //     id : 4,
        //     title : "new todo",
        //     description : "new todo description"
        // })
        // setTodos(newTodos)
    }
    return <>
        <button onClick={addTodo}>Add todo</button>
        {todos.map((todo)=>{

            // we have to return this component
            // we can't name todoId as key, because it expects key as a different props

            // return <CreateTodo todoId={todo.id} title={todo.title} description={todo.description}></CreateTodo>

            // the key that we are providing here is a special prop in react. Even if the component doesn't take that as an argument still it will have there without any error, and it is used to uniquely identify the elements of todos
            return <CreateTodo key={todo.id} todoId = {todo.id} title={todo.title} description={todo.description}></CreateTodo>
        })}
    </>
}
function CreateTodo({todoId, title, description}){
    return <>
        <h3>{todoId}</h3>
        <h3>{title}</h3>
        <h4>{description}</h4>
    </>
}

export default Todo;