import { memo } from "react";
import { useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);
    console.log("hello form assignment");

    // Your code starts here
    const handleIncrement= useCallback(() => {
        // setCount(count+1); // the below line also do the same thing, if we write like this even if count change the page will no re-render if count is present inside the dependency array, but if we put count in the dependency array then the problem remains same, yes it will not re-render if other state variables are changed but in this case the page will not re-render again
        setCount((currentCount)=>{
            return currentCount + 1;
        })
    },[])

    const handleDecrement= useCallback(() => {
        // setCount(count-1;
        setCount(count => count-1)
    }, [])

    // function handleIncrement(){
    //     setCount(count+1);
    // }

    // function handleDecrement(){
    //     setCount(count-1);
    // }



    // const handleIncrement = useCallback(() => {
    //     setCount(function(currentCount) {
    //         return currentCount + 1;
    //     })
    // }, [])

    // const handleDecrement = useCallback(() => {
    //     setCount(count => {
    //         return count - 1
    //     });
    // }, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
