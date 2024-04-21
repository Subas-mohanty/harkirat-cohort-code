import { useState } from "react";
import Dashboard from "./Dashboard"
import Landing from "./Landing"

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// import { Parent } from "./components/Parent";

function Routing() {

  const [isDashboard, setIsDashboard] = useState(false)

  return (
    <>

      <div>
      {/* <Landing></Landing>
      { isDashboard ? <Dashboard/> : <div></div>}
      <button onClick={()=> setIsDashboard((true))}>Go to dashboard</button> */}
      {/* <Parent></Parent> */}
      <div>
        {/* this will reload the page */}
        {/* <button onClick={()=> window.location.href="/dashboard"}>go to dashboard</button>
        <button onClick={()=> window.location.href="/"}>go to landing</button> */}

        {/* this will not work as useNavigate can only be used inside BrowserRouter component */}
        {/* <button onClick={goDashboard}>go to dashboard</button>
        <button onClick={()=> {navigate("/")}}>go to landing</button> */}
      </div>
    </div>

      <BrowserRouter>
        <AppRoute/>
        <Routes>
          <Route path= "/Dashboard" element= {<Dashboard/>}></Route>
          <Route path= "/" element= {<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppRoute(){

  const navigate = useNavigate();

  function goDashboard(){
    navigate("/dashboard")
  }

  return <div>
      <button onClick={goDashboard}>go to dashboard</button>
      <button onClick={()=> {navigate("/")}}>go to landing</button>
  </div>
}
export default Routing