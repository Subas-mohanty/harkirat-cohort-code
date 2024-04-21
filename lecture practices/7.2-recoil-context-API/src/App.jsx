import { useContext, useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {countAtom, isEvenSelector} from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("count re-rendered");
  return (
    <div>
      {/* any component that uses the recoil value should be wrap inside RecoilRoot */}
      {/* <RecoilRoot>
        <CountRender />
        <Buttons />
      </RecoilRoot> */}

      <CountRender />
      <Buttons />
      <EvenCountRenderer/>
    </div>
  );
}

function CountRender() {
  const [count] = useRecoilState(countAtom);
  // const count = useRecoilValue; // this will return only the value of the count
  return <div>{count}</div>;
}
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  // we only need setCount here so we can only use it like this, and also the above line re-renders the button component whenever we click on a button
  const setCount = useSetRecoilState(countAtom)

  console.log("buttons");
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>increase count</button>
      <button onClick={() => setCount(count - 1)}>decrease count</button> */}

      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        decrease count
      </button>
      {/* {count % 2 == 0 ? <div>It is even</div> : <div>It is odd</div>} */}
    </div>
  );
}

function EvenCountRenderer() {
  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);
  const isEven = useRecoilValue(isEvenSelector);
  return <div>{isEven ? <div>It is even</div> : <div>It is odd</div>}</div>;
}

export default App;
