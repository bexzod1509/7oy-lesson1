import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
function Navbar() {
  let { pathname } = useLocation();
  if (
    pathname == "/admin" ||
    pathname == "/admin/create" ||
    pathname == "/admin/createuser" ||
    pathname == "/admin/manage" ||
    pathname == "/admin/manageuser"
  ) {
    return <></>;
  }
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <Link to={"/"} className="logo">
            <p>продукты</p>
          </Link>
          <div
            id="links"
            className={`navbar-responsive ${toggle ? "open" : ""}`}
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/users"}>Users</Link>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
            <Link to={"/admin"}>
              <RiAdminLine />
              Admin
            </Link>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className="menu-btn"
            id="menu-btn"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
