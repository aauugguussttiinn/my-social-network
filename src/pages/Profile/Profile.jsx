import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'redux/actions/userActions';

import UserProfile from 'components/UserProfile/UserProfile';
import Loader from 'components/Loader/Loader';



const Profile = () => {

  const userProfile = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getUserProfile = async() => {
    setLoading(true)
    const token = Cookies.get('token')
  
    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await dispatch(setUser(cookiesConfig))
    setLoading(!loading)
  };

  useEffect(() => {
    getUserProfile();
    },
    [ userProfile.changed === false ]
  );

  return (
    <div className="profile container">
      { loading ? (
        <Loader type='spin' color='#454545' />
      ) : ( 
        ( userProfile.changed === false ? (
          <>
            <h1>Welcome to your profile page, { userProfile.username } !</h1>
            <div className="my-profile-container">
              <UserProfile username={ userProfile.username } email={ userProfile.email } />
            </div>
          </>
           ) : (
           <Redirect to={{ pathname: '/profile' }} />
           )
        ))
      }
      {/* <h1>Welcome to your profile page, { userProfile.username } !</h1>
        <div className="my-profile-container">
          <UserProfile username={ userProfile.username } email={ userProfile.email } />
        </div> */}
      {/* { userProfile.changed === false ? (
        <>
          <h1>Welcome to your profile page, { userProfile.username } !</h1>
          <div className="my-profile-container">
            <UserProfile username={ userProfile.username } email={ userProfile.email } />
          </div>
        </>
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )} */}
    </div>
  );
};

export default Profile;