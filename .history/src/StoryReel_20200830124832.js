import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://mk0laterblog0uwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605"
        title="Tibetan Chef Online"
      />
      <Story
        image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/12279088_10153803293162792_1611734372231132415_n.jpg?_nc_cat=108&_nc_sid=825194&_nc_ohc=eY6aACShhB0AX8A4oit&_nc_ht=scontent-sjc3-1.xx&oh=84762e5e11c47c32a70eeedee04c34cd&oe=5F72C71C"
        profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/109731674_100879041721947_7867685920610035958_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=AdSe0KV13WMAX8RxEZ4&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=7034e5a8261f5575bdf630f69a34171b&oe=5F734B00"
        title="Kalden"
      />
      <Story
        image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/12279088_10153803293162792_1611734372231132415_n.jpg?_nc_cat=108&_nc_sid=825194&_nc_ohc=eY6aACShhB0AX8A4oit&_nc_ht=scontent-sjc3-1.xx&oh=84762e5e11c47c32a70eeedee04c34cd&oe=5F72C71C"
        profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-1/cp0/p80x80/28164522_10155513312022607_1943080483326893817_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=-GzdlpnuBCAAX_K_HDB&_nc_ht=scontent-sjc3-1.xx&oh=d999ebca4a762b8460e7601d20062acc&oe=5F72F8C0"
        title="Tibetan Chef Online"
      />
    </div>
  );
}

export default StoryReel;
