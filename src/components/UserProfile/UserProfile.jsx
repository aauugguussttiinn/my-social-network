import React from 'react';

const UserProfile = ({username, email}) => {
  return (
    <div className="my-profile-container my-4">
      <ul>
        <li>Username : { username }</li>
        <li>Email : { email }</li>
      </ul>
    </div>
  );
};

export default UserProfile;