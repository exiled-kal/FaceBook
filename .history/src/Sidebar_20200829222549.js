import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title='{avatar}'/>
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
