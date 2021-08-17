import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
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
  );
};

export default Navigation;