import React from 'react';
import './SidebarRow.css';

function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
    {src }
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
