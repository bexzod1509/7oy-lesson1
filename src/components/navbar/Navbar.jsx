import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a className="logo" href="#">
            <p>продукты</p>
          </a>
          <div
            id="links"
            className={`navbar-responsive ${toggle ? "open" : ""}`}
          >
            <a href="#">Home</a>
            <a href="#">About</a>
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
