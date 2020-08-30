import React from 'react';
import './SidebarRow.css';
import {Avatar} from '@material-ui/core';

function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
      {/* if you only pass in a src then we render avatar */}
      {src && <Avatar src={src} />}
      {/* if you only pass in an icon then we render the icon */}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
