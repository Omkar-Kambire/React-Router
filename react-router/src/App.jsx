import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <>
      <h1>React Router</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
