import Navigation from 'components/Navigation/Navigation';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';

const Register = () => {
  
  return (
    <>
      <Navigation />
      <div className="register">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;