import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';
import Cookies from "js-cookie";
import { useEffect } from 'react';

const App = () => {

  const currentUser = useSelector((state) => state.user);

  const loginUserWithCookie = async() => {
    const token = Cookies.get('token')

    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig);
    const cookieData = await response.json();
    if (cookieData) {
      return true;
    } else {
      return false;
    }

  };

  const checkAuth = () => {
    if (currentUser || loginUserWithCookie()) {
      console.log('User is logged in');
      return true;
    } else {
      console.log('User is NOT logged in');
      return false;
    }
  }

  useEffect(
    () => {
      checkAuth();
    },
    []
  );

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  );

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;