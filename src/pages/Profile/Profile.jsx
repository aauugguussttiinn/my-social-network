import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from 'components/UserProfile/UserProfile';
import { setUser } from 'redux/actions/userActions';


const Profile = () => {

  // const userProfile = useSelector((state) => state.userReducer);
  // const [dataToggler, setDataToggle] = useState(false)
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
      {/* { dataToggler === false ? (
        <>
          <h1>Welcome to your profile page, { userProfile.username } !</h1>
          <div className="my-profile-container">
            <UserProfile username={ userProfile.username } email={ userProfile.email } />
          </div>
        </>
      ) : (
        <Redirect to={{ pathname: '/profile' }} />
      )} */}
    </div>
  );
};

export default Profile;