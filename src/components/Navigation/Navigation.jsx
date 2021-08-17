import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation d-flex align-items-center">
      <div className="nav-left col-6">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">
          About
        </NavLink>
        <NavLink exact to="/works" activeClassName="nav-active">
          Works
        </NavLink>
      </div>
      <div className="nav-right col-6 d-flex justify-content-end">
        <button className="btn btn-primary mx-2">Sign In</button>
        <button className="btn btn-outline-primary mx-2">Log In</button>
      </div>
    </div>
  );
};

export default Navigation;