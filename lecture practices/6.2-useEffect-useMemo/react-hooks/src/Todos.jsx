import { useEffect, useState } from "react"
import axios from "axios";

function Todos(){
    const [id, setId] = useState(1);

    // let timeOut;
    // function onChange(e){
    //     clearTimeout(timeOut)
    //     timeOut = setTimeout(()=>{
    //         setId(e.target.value)
    //     }, 1000)
    // }

    
    return <div>
        <button onClick={()=> setId(1)}>1</button>
        <button onClick={()=> setId(2)}>2</button>
        <button onClick={()=> setId(3)}>3</button>
        <button onClick={()=> setId(4)}>4</button>

        {/* <input type="text" placeholder="enter id" onChange={onChange}/> */}
        <Todo id = {id}></Todo>
    </div>
}

function Todo({id}){
    const [todos, setTodos] = useState({});

    let todo;
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((res)=>{
            todo = res.data.todo;
            if(todo == undefined){
                console.log("todos");
                return <div>
                    todo not found
                </div> 
            }
            else{
                setTodos(todo)
            }
        })

    }, [id])

   
    return <div>
         <h1>{todos.title}</h1>
         <h4>{todos.description}</h4> 
    </div>
}

// custom hooks
// function useTodo(){
//     const [todo, setTodo] = useState(0);

//     useEffect(()=>{
//         axios.get("").
//         then((res)=>{
//             setTodo(res.data.todos);
//         })
//     }, []);

// }
// function Todos(){
//     const todo = useTodo();
//     return <div>
//         <button>click me</button>
//     </div>
// }

export default Todos;