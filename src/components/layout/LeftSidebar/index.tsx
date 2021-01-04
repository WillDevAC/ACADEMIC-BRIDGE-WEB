import React from 'react';

import UserInfo from './UserInfo';
import MainMenu from './MainMenu';
import FooterPanel from './FooterPanel';

const LeftSidebar: React.FC = () => {

  return (
    <aside id="leftsidebar" className="sidebar">
      <UserInfo />
      <MainMenu />
      <FooterPanel />
    </aside>
  )
}

export default LeftSidebar;
