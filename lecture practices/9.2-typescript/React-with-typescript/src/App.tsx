import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title='study' description='Learn coding' id={1}/>
    </>
  )
}
interface TodoProp{
  title : string, 
  description : string,
  id : number
}
function Todo(props: TodoProp){
  return <div>
    <h2>{props.title}</h2>
    <h3>{props.description}</h3>
    <h4>{props.id}</h4>
  </div>
}

export default App
