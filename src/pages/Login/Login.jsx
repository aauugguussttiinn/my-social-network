import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {

  const globalState = useSelector((state) => state);

  return (
    <div className="login">
      { globalState.user !== undefined ? ( <Redirect to={{ pathname: '/' }} /> ) : ( <LoginForm /> )  }
      {/* <LoginForm /> */}
    </div>
  );
};

export default Login;