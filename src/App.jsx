import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"

import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';
import Navigation from 'components/Navigation/Navigation';
import Cookies from "js-cookie";

const App = () => {

  const currentUser = useSelector((state) => state.user);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const loginUserWithCookie = async() => {
    const token = Cookies.get('token')

    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig)
    const cookieData = await response.json();
    // console.log(cookieData)
    // console.log('test')
    // console.log(cookieData);
    if (!cookieData.error) {
      // console.log("it returns true")
      return true;
    } else {
      // console.log("it returns false")
      return false;
    }

  };

  const checkAuth = async() => {
    const a = await (loginUserWithCookie());
    // console.log(a);
    // console.log(loginUserWithCookie())
    if (currentUser || a === true) {
      // console.log('User is logged in');
      setIsAuthorized(true);
      // console.log(isAuthorized);
      return true;
    } else {
      // console.log('User is NOT logged in');
      // console.log(isAuthorized);
      return false;
    }
  }
  // console.log(`checkAuth ${checkAuth()}`)
  // console.log(`$$$$$$$$$$ ${isAuthorized}`)
  // console.log("aaaaaaaa");
  // console.log(checkAuth());
  // console.log("aaaaaaaa");
  const PrivateRoute = ({ component: Component, ...rest }) => (
    // checkAuth(),
    // console.log(`teeeeeest ${isAuthorized}`),
    <Route {...rest} render={props => (
      isAuthorized ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  );

  return (
    <BrowserRouter>
        <Navigation auth={ checkAuth() }/>
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