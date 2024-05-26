
function layout({children} : {
    children : React.ReactNode
}) {
  return (
    <div>
        <div>this is for both sign in and signup</div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout