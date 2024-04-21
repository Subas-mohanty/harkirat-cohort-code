import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import ClassComponent from "./components/ClassComponent";
import CustomHook from "./hooks/CustomHook";
import OtherHooks from "./hooks/OtherHooks";

function App() {
  return (
    <div>
      {/* <ClassComponent /> */}
      {/* <CustomHook /> */}
      <OtherHooks />
    </div>
  );
}
export default App;
