import React, { useState } from 'react';
import { useUserData } from '../../../../context/contextAuth'
import faker from 'faker';


const UserInfo: React.FC = () => {
  const { user } = useUserData();
  // eslint-disable-next-line
  const [profilePicture, setProfilePicture] = useState<string>(`${faker.image.avatar()}`);
  // eslint-disable-next-line
  const [userName, setUserName] = useState<string>(user.name);
  // eslint-disable-next-line
  const [userEmail, setUserEmail] = useState<string>(user.email);






  return (
    <div className="user-info">
      <div className="image">
        <img src={profilePicture} width="48" height="48" alt="User" />
      </div>
      <div className="info-container">
        <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{userName}</div>
        <div className="email">{userEmail}</div>
      </div>
    </div>
  )
}

export default UserInfo;


