import React from 'react';

const UserProfile = ({username, email}) => {
  return (
    <div className="my-profile-container">
      <p>{ username }</p>
      <p>{ email }</p>
    </div>
  );
};

export default UserProfile;