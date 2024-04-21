import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./Dashboard"));
const Landing = React.lazy(() => import("./Landing"));

function LazyRouting() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
        <Routes>
          <Route path="/Dashboard" element={<Suspense fallback= {"loading...."} ><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback = {"loading...."}><Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppRoute() {
  const navigate = useNavigate();

  function goDashboard() {
    navigate("/dashboard");
  }

  return (
    <div>
      <button onClick={goDashboard}>go to dashboard</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >go to landing
      </button>
    </div>
  );
}
export default LazyRouting;
