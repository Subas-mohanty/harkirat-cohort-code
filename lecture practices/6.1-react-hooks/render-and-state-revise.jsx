import { useState } from "react";
import React from "react";

function Temp(){
    const [count , setCount] = useState(0);
    function addCount(){
        setCount(count+1);
    }
    return <div>
        <button onClick={addCount}>Counter</button>
        <Counter count= {count}></Counter>
        {/* <h4>{count}</h4> */}
        <h5>hello</h5>
        <h5>hello</h5>
        <h5>hello</h5>
        <h5>hello</h5>
        <h5>hellod</h5>
    </div>
    // return <div>
    //     <Counter></Counter>
    // </div>
}

const Counter = React.memo(function Counter({count}){
    return <div>
        {count}
    </div>
})

export default Temp;