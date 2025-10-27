import React from "react";
import {Link, Outlet} from "react-router";
import "./header.css" 

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div>
          <Link className="link" to="/"><h2>Logo</h2></Link>
        </div>

        <div>
          <ul>
            <li>
              <Link className="link" to="/" >Home</Link>
            </li>
            <li>
              <Link className="link" to="/user/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/user/contact">Contact</Link>
            </li>
            <li>
              <Link className="link" to="/college">College</Link>
            </li>
            <li>
              <Link className="link" to="/users">Users</Link>
            </li>
            
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
