import React from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';

function MessageSender() {
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input 
          className="</div>"
          placeholder={`What's on your mind`} />
          <input type="text" />
        </form>
      </div>
      <div className="messageSender__bottom"></div>
    </div>
  );
}

export default MessageSender;
