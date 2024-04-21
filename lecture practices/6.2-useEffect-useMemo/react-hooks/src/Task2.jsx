import { memo, useCallback, useEffect, useState, useRef } from "react"

// export default function Task2() {

//   const [count, setCount] = useState(0);
//   const [sum, setSum] = useState();


//   function onClick() {
//     setCount(count + 1);
//   }

// //   useEffect(()=>{
// //     function calSum(num) {
// //         let ans = (num * (num+1))/2;
// //         console.log("hello");
// //         setSum(ans);
// //       }
// //   }, [sum])
  
//   let ans = 0;
//   for(let i = 0; i<= sum; i++){
//     ans += i;
//   }

//   // debouncing
// //   let timeOut;
// //   function onChange(e){
// //     clearTimeout(timeOut);
// //     timeOut = setTimeout(()=>{
// //         calSum(parseInt(e.target.value));
// //     }, 1000)
// //   }

//   function onChange(e){
//     calSum(parseInt(e.target.value));
//   }

//   return <div>
//     <input type="text" placeholder="Enter number to get sum" onChange={(e)=> setSum(e.target.value)} />
//     <h4>Sum is {ans}</h4>
//     <button onClick={onClick}> Count is {(count)}</button>
//   </div>
// }



// use useCallback
// export default function Task2(){
//   const [count , setCount] = useState(0);

//   // let a = 1; // this will allow the Hello component to rerender again and again in absence of memo
//   // for primitives it checks for value but for functions it check for reference thats why instead of having the same function and memo the Hello component still re-renders again and again on every button click


//   // function a(){
//   //   console.log("re-render");
//   // }

//   // to prevent this we use useCallback

//   const a = useCallback(()=>{
//     console.log("re-render");
//   }, []);
  

//   // we can use objects inside useCallback also, because objects are also compared by reference so anytime the page re-renders the reference got changed and it re-renders again and again, so we can use useCallbacks

//   // const b = useCallback({
//   //   msg : "hello",
//   // }, [])


//   return <div>
//     <button onClick = {() => count+1}>click me {count} </button>

//     <Hello a = {a}></Hello>
//   </div>
// }
// const Hello = memo(({a})=>{
//   console.log("re-renders");
//   return <div>
//     <button>laksd</button>
//   </div>
// })



export default function Task2(){
  const [count, setCount] = useState(30);
  const divref = useRef();

  setTimeout(() => {
    console.log("hello form timeout")
    // document.getElementById("div").innerHTML = 10;
    console.log(divref.current);
    divref.current.innerHTML = 10;
  }, 5000);

  return <div>
    your age is <div ref={divref} id = "div">{count} </div>
    <button ref={divref}>click me</button>
  </div>
}