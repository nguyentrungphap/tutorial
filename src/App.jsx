import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./App/Components/Navbar/index";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
