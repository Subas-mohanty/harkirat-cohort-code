// import Button from "../components/Button";
// import ButtonWarning from "../components/ButtonWarning";
// import Heading from "../components/Heading";
// import InputBox from "../components/InputBox";
// import SubHeading from "../components/SubHeading";

import { useState } from "react";
import axios from "axios"
import {
  Heading,
  SubHeading,
  InputBox,
  Button,
  ButtonWarning,
} from "../components";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  console.log(firstName);

  async function onClickHandler() {
    await axios.post("http://localhost:3000/api/v1/user/signup", {
      firstName,
      lastName,
      userName : email,
      password
    }).then((response)=>{
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }).catch((err)=>{
      alert("Invalid credentials")
    })
    // alert("Signed up successfully")
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Create a new use sign up"} />
          <InputBox onChange = {(e)=> setFirstName(e.target.value)} label={"First Name"} placeholder={"John"} />
          <InputBox onChange = {(e)=> setLastName(e.target.value)} label={"Last Name"} placeholder={"Doe"} />
          <InputBox onChange = {(e)=> setEmail(e.target.value)} label={"Email"} placeholder={"abc@xyz.com"} />
          <InputBox onChange = {(e)=> setPassword(e.target.value)} label={"Password"} placeholder={"123456"} />
          <Button label={"sign up"} onClick={onClickHandler} />
          <ButtonWarning
            label={"Already have an account ?"}
            buttonText={"Log in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
