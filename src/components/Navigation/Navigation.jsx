import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "js-cookie";

const Navigation = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(user)

  const handleLogOut = () => {
    Cookies.remove('token');
    // dispatch(logoutUser());
  }

  return (
    <div className="navigation d-flex align-items-center">
      <div className="nav-left col-6">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        {user && (
          <NavLink exact to="/profile" activeClassName="nav-active">
            Profile
          </NavLink>
        )}
      </div>
      <div className="nav-right col-6 d-flex justify-content-end">
        {!user && (
          <>
            <NavLink exact to="/register" className="btn btn-primary mx-2">
              Sign In
            </NavLink>
            <NavLink exact to="/login" className="btn btn-primary mx-2">
              Log In
            </NavLink>
          </>
        )}
        {user && (
          <button onClick={ () => handleLogOut() } className="btn btn-danger mx-2"> Log Out </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;