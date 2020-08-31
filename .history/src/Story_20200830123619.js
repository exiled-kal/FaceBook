import React from 'react';
import './Story.css';
import {Avatar} from '@material-ui/core';

function Story({image, profileSrc, title}) {
  return (
    <div className="story">
      <Avatar src={profileSrc} />
    </div>
  );
}

export default Story;
