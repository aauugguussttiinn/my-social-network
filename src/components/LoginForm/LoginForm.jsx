import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <form>
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" value="e" placeholder="Write down whatever you have to do here"></input>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        <input type="submit" value="Add todo" />
      </form>
    </div>
  );
};

export default LoginForm;