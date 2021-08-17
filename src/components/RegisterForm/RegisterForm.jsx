import React from 'react';

const RegisterForm = () => {
  return (
    <div className="d-flex">
      <div className="col-3"></div>
      <form className="col-6">
      <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div className="col-3"></div>
    </div>
  );
};

export default RegisterForm;

{/* <div>
<form className="">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value="e" placeholder="Write down whatever you have to do here"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <input type="submit" value="Add todo" />
</form>
</div> */}