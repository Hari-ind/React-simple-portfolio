import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-container section">
      <div>
        <h3>
          <a href="about">logo</a>
        </h3>
      </div>
      <div className="nav-links">
        <p>
          <a href="#projects">projects</a>
        </p>
        <p>
          <a href="#skills">skills</a>
        </p>
        <p>
          <a href="#contact">contact</a>
        </p>
      </div>
      <div className="togglemenu">
        {toggle ? (
          <RiCloseLine
            color="#2978b5"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            color="#2978b5"
            size={27}
            onClick={() => setToggle(true)}
          />
        )}

        {toggle && (
          <div className="toggle-links">
            <p>
              <a href="#projects">projects</a>
            </p>
            <p>
              <a href="#skills">skills</a>
            </p>
            <p>
              <a href="#contact">contact</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
