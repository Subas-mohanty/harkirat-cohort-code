import React, { useEffect, useState } from "react";

function OtherHooks() {
  // const online = useOnline();

  // if (online) console.log("you are online yay!");
  // else console.log("you are offline");

  // const mousePointer = useMousePointer();
  // return (
  //   <>
  //     Your mouse position is {mousePointer.x} {mousePointer.y}
  //   </>
  // );

  // const timer = useInterval();
  // return (
  //   <>
  //    your timere is {timer}
  //   </>
  // );

  // const [count, setCount] = useState(0);
  // useInterval2(() => {
  //   setCount((c) => c + 1);
  // }, 1000);
  // return <div>count is {count}</div>

  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 5000);

  return <div>
    <input type="text" 
      value={inputValue}
      placeholder="search.."
      onChange={(e)=>setInputValue(e.target.value)}
    />
    <div>
      input value is {debouncedValue}
    </div>
  </div>
}

function useDebounce(inputValue, timeOut) {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(()=>{
    const timeKey = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, timeOut);

    // if continuos request came we will accept it input after this timeout from the last key stroke
    return ()=>{
      clearTimeout(timeKey);
    }
  }, [inputValue])
  return debouncedValue;
}

function useInterval2(fn, timeOut) {
  useEffect(()=>{
    setInterval(fn, timeOut);
  }, [])
}

function useInterval() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  return timer;
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

function useOnline() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    setInterval(() => {
      console.log("inside interval");
      if (window.navigator.onLine) setOnline(true);
      else setOnline(false);
    }, 5000);
  }, [online]);

  // useEffect(()=>{
  //   window.addEventListener('online', ()=>{setOnline(true)})
  //   window.addEventListener('offline', ()=>{setOnline(false)})
  // }, [])

  return online;
}
export default OtherHooks;
