"use client"

// this is how we tell that this component is a client side component, because nextjs does server side rendering and if we don't write this sentence it assume that it is a server side component and because onclick doesn't work on server side it gives an error

export function Button(){
    function clickHandler(){
        console.log("hi from on click")
    }
    return <div>
        <button onClick={clickHandler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    </div>
    
}