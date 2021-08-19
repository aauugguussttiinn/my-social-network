import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from 'components/UserProfile/UserProfile';
import { setUser } from 'redux/actions/userActions';


const Profile = () => {

  const userProfile = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const getUserProfile = async() => {
    const token = Cookies.get('token')
  
    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await dispatch(setUser(cookiesConfig))

  };

  useEffect(() => {
    getUserProfile();
    },
    []
  );

  return (
    <div className="profile container">
      <h1>Welcome to your profile page, { userProfile.username } !</h1>
      <div className="my-profile-container">
        <UserProfile username={ userProfile.username } email={ userProfile.email } />
      </div>
    </div>
  );
};

export default Profile;