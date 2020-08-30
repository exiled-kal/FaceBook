import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon}title="Messenger" />
      <SidebarRow Icon={ChatIcon}title="Marketplace" />
      <SidebarRow Icon={StoreFontIcon}title="Videos" />
    </div>
  );
}

export default Sidebar;
