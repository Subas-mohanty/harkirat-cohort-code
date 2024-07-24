import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMsg, setLatestMsg] = useState<any> ("");
  const [sendMsg, setSendMsg] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    // Connection opened
    socket.onopen = ()=>{
      console.log("Connected....");
      setSocket(socket);
    }
    // socket.onmessage = (message) =>{
    //   console.log("Recieved message ", message.data)
    //   setLatestMsg(message.data);
    // }  
    socket.addEventListener("message", event => {
      console.log("Message from server ", event.data)
    });

    return () =>{
      socket.close(); // closing the websocket connection
    }
  }, []);

  if (!socket) return <div>Connecting to socket server....</div>;
  

  return <div>
    <input  onChange={(e)=> setSendMsg(e.target.value)}/>
    <button onClick={()=>{
      socket.send(sendMsg)
    }}>Send</button>
    {latestMsg}
  </div>
}

export default App;
