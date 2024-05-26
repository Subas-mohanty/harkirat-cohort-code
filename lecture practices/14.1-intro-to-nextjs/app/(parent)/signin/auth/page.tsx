
// here we don't need this because the layout(parent) will be automatically added to this component, but when the layout and component are in the same folder we have to do something like belows
// interface childType {
//     children : React.ReactNode
// }
// function page({children} : childType) {
//   return (
//     <div>
//     <div>
//         I am form auth component
//     </div>
//     <div>
//         {children}
//     </div>
// </div>
//   )
// }

// export default page


function page() {
  return (
    <div>page</div>
  )
}

export default page