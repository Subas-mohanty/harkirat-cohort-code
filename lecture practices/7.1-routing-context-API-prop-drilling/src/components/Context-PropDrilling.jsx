import { memo, useContext, useMemo, useState } from "react";
import { CountContext } from "./Context";

// docs --> https://react.dev/learn/passing-data-deeply-with-context
// Prop drilling is a fundamental concept in React that involves passing data down through nested components in a React application.
// Prop drilling doesn't mean that parent re-renders children. It just means the syntactic uneasiness when writing code

// wrap anyone that wants to use the teleported value inside a provider

export default function PropDrilling() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Count count={count}></Count> */}
      {/* <Count>{count}</Count> */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

// by using memo here we can stop the re-rendering which is happening again and again
const Count = ({ setCount }) => {
    console.log("count re-rendered"); // this will re-rendered again and again even if we are not using the count inside this component
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <button onClick={() => setCount(count - 1)}>decrease count</button>
    </div>
  );
}
