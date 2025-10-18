import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";


function App() {
  return (
    <>
      <h1>React Router</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
