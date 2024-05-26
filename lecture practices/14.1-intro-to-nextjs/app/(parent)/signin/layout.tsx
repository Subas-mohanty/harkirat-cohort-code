
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