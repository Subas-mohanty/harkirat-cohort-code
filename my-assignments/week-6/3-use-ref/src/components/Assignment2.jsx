import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// let noOfRenders = 0; // this will work but it is not a good practice to use global variable, we can use useRef to do this thing as well
export function Assignment2() {
    const [render, forceRender] = useState(0);

    const noOfRenders = useRef(0); // this will take the value from the previous if it is already present
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(render+1);
    };

    noOfRenders.current += 1;
    // noOfRenders+=1;
    return (
        <div>
            <p>This component has rendered {noOfRenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};