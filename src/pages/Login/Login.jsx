import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {

  const globalState = useSelector((state) => state);

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
};

export default Login;