import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todo from './todo.jsx'
import Wrapper from '../../wrapperComponent.jsx'
import Temp from '../../render-and-state-revise.jsx'


// this createRoot method create a virtual DOM, which means react creates its own dom which is different from browser, and every time we update somthing in the dom, react compares broswer's dom and its own dom and only update the differences not the whole dom

// https://github.com/acdlite/react-fiber-architecture --> documentation of the createRoot or virtual DOM


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Todo></Todo> */}
    {/* <Wrapper></Wrapper> */}
    {/* <Temp></Temp> */}
  </React.StrictMode>,
)
