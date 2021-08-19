import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/actions/userActions';
import Cookies from "js-cookie";

const UserEditForm = ({username, email}) => {

  // const currentUser = useSelector((state) => state.userReducer);
  const [editUsername, setEditUsername] = useState(username);
  const [editEmail, setEditEmail] = useState(email);
  const dispatch = useDispatch();

  const handleEditProfile = (e) => {
    e.preventDefault();
    const token = Cookies.get('token')
    
    const newProfileData = {
      username: editUsername,
      email: editEmail,
    };
    dispatch(editUser(newProfileData, token));
    // window.location.reload();

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