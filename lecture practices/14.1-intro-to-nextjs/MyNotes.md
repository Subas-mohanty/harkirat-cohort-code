## First of all what the layout file do ?
### A layout file works as as parent file for all of its children, we don't have to write the same component again and again, for ex- navbar, we can write our navbar and that will be present in all the files.

## For any layout files, to render this layout file with the component we have to use the child props like this :-
```

// interface childType {
//     children : React.ReactNode
// }
// we can do the above as well, introducing an interface for the type

function page({children} : {
    children : React.ReactNode
}) {
  return (
    <div>
        <div className="border-b text-center">get flat 50% off on our course with coupon code learn to code</div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default page
```

## If we don't use the child props, we will no be able to access the child components which are present in the sub directories


### --------------------------------------------------------------------------------


### If we create a folder like this - (parent) , then this is ignored in the path



```
"use client" // this is how we tell that this component is a client side component, because nextjs does server side rendering and if we don't write this sentence it assume that it is a server side component and because onclick doesn't work on server side it gives an error
```
## By default all component is server side component