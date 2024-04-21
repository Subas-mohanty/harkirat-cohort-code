import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*
function App() {
  let [title, setTitle] = useState("i am a header");
  // header = "i am a header" // we can also do that by using let

  function render(){
    setTitle("i am " + Math.random()) // whenever this setTitle updated the App component get rerendered and all of it's children also got rerenderd irrespective of using title
  }
  return (
    // this empty thing is called fragment , it allows to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM
    <>
      <button onClick={render}>click to update title</button>
      <Header title={title}></Header>
      <Header title="i am header 2"></Header>
    </>
  );
}

function Header({ title }) {
  return <div>
    {title}
    
  </div>;
}
*/



// to get rid of the rerendering again and again we can do something like this

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title="i am header 2"></Header>
//       <Header title="i am header 3"></Header>
//       <Header title="i am header 4"></Header>
//     </>
//   );
// }


// // now the App component doesn't get rerendered again and again like before instead the HeaderWithButton component rerendered like that and it only rerendered the elements that are using the state and other static element like the second Header component doesn't rerendered 
// function HeaderWithButton(){
//   let [title, setTitle] = useState("i am a header");

//   function render(){
//     setTitle("i am " + Math.random()) // whenever this setTitle updated the App component get rerendered and all of it's children also got rerenderd irrespective of using title
//   }

//   return <>
//     <button onClick={render}>click to update title</button>
//     <br />
//     <Header title={title}></Header>
//   </>
// }

// function Header({ title }) {
//   return <div>
//     {title}
    
//   </div>;
// }



// we can use React.memo as well like this

function App() {
  let [title, setTitle] = useState("i am a header");

  function render(){
    setTitle("i am " + Math.random());
  }
  return (
    // <></> this will not work here
    <div>
      <button onClick={render}>click to update title</button>
      <Header title={title}></Header>
      <Header title="i am header 2"></Header>
      <Header title="i am header 3"></Header>
      <Header title="i am header 4"></Header>
    </div>
  );
}

// react memo

const Header = React.memo(function Header({ title }) {
  return <div>
    {title}
  </div>
})

export default App;
