import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon}title="Friends" />
      <SidebarRow Icon={ChatIcon}title="Messenger" />
      <SidebarRow Icon={StoreFontIcon}title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon}title="Videos" />
      <SidebarRow Icon={Expand}title="Videos" />
      
    </div>
  );
}

export default Sidebar;
