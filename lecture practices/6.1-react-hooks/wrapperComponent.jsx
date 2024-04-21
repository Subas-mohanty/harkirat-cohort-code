// wo the question is why we are using Wrapper Component
// ans --> we may need to define a template for every element but each have different data inside them , for ex - if we have multiple card on the page , we might want to give them same padding and margin and shadow but they all have their unique data inside them so we can create a component for the common data and we can use that component in all the cards

function Wrapper(){
    return <>
        <h4>hello</h4>
        {/* if we want to use innerComponent like this in the component {InnerComponent} */}
        {/* <Component InnerComponent = {<InnerComponent/>}></Component> */}

        {/* <Component InnerComponent = {InnerComponent}></Component> */}


        {/* the cleaner syntax for this is like this */}
        <Component>
            what is write here will be render on the page
        </Component>
        <Component>
            this is how we can create multiple component but all component will have the same common property
        </Component>
    </>
}

// function InnerComponent(){
//     return <>
//         <p>Hello from second component</p>
//     </>
// }

// function Component({InnerComponent}){
//     return <div style={{border : "2px solid black"}}>

//         {/* {InnerComponent} */}
//         {/* the above syntax is wrong because for this function innerComponent is not a variable , it is a component so we have to use it like we use a component*/}
//         {/* but still we want to use is like this we have to pass it as a component where is passed */}
        
//         {/* <InnerComponent></InnerComponent>  */}
//         {/* as a component is also a function so we can use it like this also */}
//         {InnerComponent()} 
        

        
//     </div>
// }

function Component({children}){
    // console.log(children);
    return <div style={{border : "2px solid black"}}>
        {children}
    </div>
}

export default Wrapper;