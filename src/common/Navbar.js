import React from "react";

const Navbar = ({ title }) => (
  <nav className="navbar navbar-dark bg-danger">
    <span className="navbar-brand mb-0 h1">{title}</span>
  </nav>
);

export default Navbar;
