import React from 'react';
import './SidebarRow.css';
import {Avatar} from '@material-ui/core';

function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
    {/* if you only pass in a src then we render avatar */}
      {src && <Avatar src={src} />}
      {/* if you  */}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
