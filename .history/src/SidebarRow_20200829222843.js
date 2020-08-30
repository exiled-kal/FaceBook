import React from 'react';
import './SidebarRow.css';

function SidebarRow({title}) {
  return (
    <div className="sidebarRow">
      <p>{props.title}</p>
    </div>
  );
}

export default SidebarRow;
