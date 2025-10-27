import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Page404 from "./Page404";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <h1>React Router</h1>
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<UserList />} />  {/* '?' makes the segment optional. It matches both '/users/list' and '/users/'*/}
          {/* <Route path="/users/list" element={<UserList />} /> */}
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />

          {/* Route Prefixes */}
          <Route path="user">
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          
          <Route path="college" element={<College />}>
            <Route path="student" element={<Student />} />
            <Route path="department" element={<Department />} />
            <Route path="details" element={<Details />} />
          </Route>
          {/* <Route path="*" element={<Page404 />} /> */}
          {/* to show 404 page or redirect to home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        {/* <Route path="*" element={<Page404 />} /> // to show 404 page */}
        <Route path="*" element={<Navigate to="/" />} /> // to redirect to home
        page
      </Routes>
    </>
  );
}

export default App;
