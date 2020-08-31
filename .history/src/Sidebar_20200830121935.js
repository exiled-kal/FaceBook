import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://previews.dropbox.com/p/thumb/AA7_XjE5RR3MQJjqv-J-coxXoLupngyXw4tCws7KFzmKpKIwSBNWqa8_HeN4VmtGp9IilB7KNKmnEiwfQsyG5OoYjlKSYgC0BS-Uav7EbdVs1VpuIiPKJWqaamaYBoG6A0KDOPi8sRBQ0T-yzKrDHtcPvdJ5aE5f3XzzA2WDlWzatlCeCMF6P-8WGkQ-3ENn6PtCjcezHNUeyD7dnZhLo6hRcoPU1zsI8OWNmZJh6l-y407Ln9jYvXqW2zS653iaH9-IWzXq7_ohwIidxkT_amiQNcThkvL26qgg3njrbIz6bOKl5DOrfJKsZ8CiHNR4Eca25pbdpyx2uiZmSBIaQRLF/p.jpeg?fv_content=true&size_mode=5"
        title="Tsering"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
