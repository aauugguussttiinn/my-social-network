import React, { useState } from 'react';

const UserEditForm = ({username, email}) => {

  const [editUsername, setEditUsername] = useState(username);
  const [editEmail, setEditEmail] = useState(email);


  const handleEditProfile = (e) => {
    e.preventDefault();
  }

  return (
    <div className="user-edit-form d-flex">
      <form className="my-2" onSubmit={ (e) => handleEditProfile(e) }>
        <div className="form-group my-1">
          <label htmlFor="exampleInputUserName1">Your new username</label>
          <input className="form-control" type="text" defaultValue={ editUsername } onChange={ (e) => setEditUsername(e.target.value) }></input>
        </div>
        <div className="form-group my-1">
          <label htmlFor="exampleInputEmail1">Your new email</label>
          <input type="text" className="form-control" defaultValue={ editEmail } onChange={ (e) => setEditEmail(e.target.value) }></input>
        </div>
        <input type="submit" className="btn btn-primary my-2" value="Confirm" />
      </form>
    </div>
  );
};

export default UserEditForm;