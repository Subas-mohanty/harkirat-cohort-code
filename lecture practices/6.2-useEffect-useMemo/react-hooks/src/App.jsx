import { memo, useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  
  console.log("hello");

  // fetch("https://dummyapi.online/api/movies").then(async (response) => {
  //   const json = await response.json();
  //   console.log(json);
  //   console.log("hello");
  // });

  // useEffect(
  //   () => {
  //     fetch("https://dummyapi.online/api/movies").then(async (response) => {
  //       const json = await response.json();
  //       console.log(json);
  //       console.log("hello");
  //       setCount(count + 1);
  //     }),
  //       []; // this is called a dependency array, it takes state as an element, and when that element value changes it re-renders the page
  //   },
  //   [] // this is called a dependency array, it takes state as an element, and when that element value changes it re-renders the page
  // );

  function onClick() {
    console.log("child clicked");
  }

  return (
    <>
      <Counter onClick={onClick}/>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me {count}
      </button>
    </>
  );
}

// const Counter = (({ onClick }) => {
//   console.log("child render");
//   return (
//     <>
//       <button onClick={onClick}>button clicked</button>
//     </>
//   );
// });

export default App;
