import { useEffect, useState } from "react";
import "../App.css";
import React from "react";

function ClassComponent() {

  // this will put and remove the element to the dom after a certain amount of time
  const [render, setRender] = useState(true)
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setRender(r=>!r);
  //   }, 3000)
  // },[])
  
  return (
    <>
      <MyComponent />
      {/* {render ? <ClassComp /> : <div></div>} */}
      {/* {render ? <MyComp /> : <div></div>} */}
    </>
  );
}

function MyComponent() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <button style={{ margin: "5px" }} onClick={handleCount}>
          count {count}
        </button>
      </div>
    </>
  );
}

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.count);
  };

  // this will run when the element will render on the screen
  componentDidMount(){
    console.log("component mounted");
  }
  // this will run when the element got removed from the screen
  componentWillUnmount(){
    console.log("component unmounted");
  }
  render() {
    return (
      <>
        <div>
          <button onClick={this.handleCount}>count {this.state.count}</button>
        </div>
      </>
    );
  }
}

function MyComp() {
  useEffect(() => {
    console.error("component mounted");

    // this will run when the component will unmount or removed from the dom
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return <div>From inside my component</div>;
}
export default ClassComponent;
