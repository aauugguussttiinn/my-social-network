import LoginForm from 'components/LoginForm/LoginForm';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="login">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;