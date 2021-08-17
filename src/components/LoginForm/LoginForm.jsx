import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "redux/actions/userActions";

const LoginForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [identifier, setIdentifier] = useState('');
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      setIdentifier(email)
      const userData = {
        identifier,
        password,
      };

      await dispatch(loginUser(userData))
    }
};
  
  return (
    <div className="d-flex">
      <div className="col-3"></div>
      <form className="col-6" onSubmit={ (e) => handleLogin(e) }>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control"
            id="exampleInputEmail2" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"
            id="exampleInputPassword2" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
        </div>
        <div class="form-check">
          <input type="checkbox" className="form-check-input"
            id="exampleCheck2"></input>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <input type="submit" className="btn btn-primary" value="Envoyer" />
      </form>
      <div className="col-3"></div>
    </div>
  );
};

export default LoginForm;