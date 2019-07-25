import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav>
      <div className="navbar__title">
        <h1>{title}</h1>
      </div>
      <div className="navbar__links">
        <Link to="/">Todos</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
        <Link to="/hooks">Hooks</Link>
      </div>
    </nav>
  );
};

export default Navbar;
