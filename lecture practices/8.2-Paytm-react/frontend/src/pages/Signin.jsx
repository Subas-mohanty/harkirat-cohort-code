import React, { useState } from 'react'
import { Heading, SubHeading, InputBox, Button, ButtonWarning } from '../components'
import { Navigate, useNavigate } from 'react-router-dom'
// import Button from "../components/Button";
// import ButtonWarning from "../components/ButtonWarning";
// import Heading from "../components/Heading";
// import InputBox from "../components/InputBox";
// import SubHeading from "../components/SubHeading";


function Signin() {
  const navigate = useNavigate();
  async function onClickHandler() {
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      userName : email,
      password
    })
    navigate("/dashboard")
  }
  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign in"} />
      <SubHeading label={"Enter your credentials to access your account"} />
      <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
      <InputBox placeholder="123456" label={"Password"} />
      <div className="pt-4">
        <Button label={"Sign in"} onClick={onClickHandler}/>
      </div>
      <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
    </div>
  </div>
</div>
}

export default Signin;
