import React from "react";

const Navbar = ({ title }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
    <a className="navbar-brand mb-0 h1" href="./">
      <img
        src="3pe-logo.png"
        width="28"
        height="28"
        className="d-inline-block align-middle"
        alt="logo"
      />
      &nbsp; {title}
    </a>

    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/janithl/three-point-est"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
