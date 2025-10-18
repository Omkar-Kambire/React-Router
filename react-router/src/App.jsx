import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Page404 from "./Page404";


function App() {
  return (
    <>
      <h1>React Router</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Page404 />} /> // to show 404 page */}
        <Route path="*" element={<Navigate to="/" />} /> // to redirect to home page
      </Routes>
    </>
  );
}

export default App;
