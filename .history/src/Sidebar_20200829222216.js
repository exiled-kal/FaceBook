import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
