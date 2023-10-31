import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import "../assets/css/Dashboard.css";

import NotificationIcon from "../assets/notification.png";

function TopNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorE2, setAnchorE2] = useState(null);

  const handleAvatarOpenMenu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleAvatarCloseMenu = () => {
    setAnchorE2(null);
  };

  return (
    <div className="bg-white px-5 leftNavContainer">
      <div className="container mx-auto py-1 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div>
          <div className="flex items-center">
            <div>
              <div className="cursor-pointer bg-[#F7F6FD] transition ease-in-out delay-30  flex items-center mx-3 relative hover:bg-[#e3e3e3] p-[8px] rounded-full">
                <NotificationsNoneIcon onClick={handleOpenMenu} />
              </div>
              <Popover
                className="notification-popup"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <div className="text-zinc-800 text-md font-semibold mb-2 p-2">
                  Notifications
                </div>
                <div className="flex mb-4 ">
                  <div className="bg-[#EBF5FF] text-[#257AD8] px-[15px] py-[5px] mx-2 rounded-full text-[14px] cursor-pointer hover:bg-[#E4E6EB] hover:text-[#000]">
                    All
                  </div>
                  <div className="bg-[#EBF5FF] text-[#257AD8] px-[15px] py-[5px]  rounded-full text-[14px] cursor-pointer hover:bg-[#E4E6EB] hover:text-[#000]">
                    Unread
                  </div>
                </div>
                <div className="flex items-center  filter-container-notification p-4">
                  <div>
                    <img
                      src={NotificationIcon}
                      className="w-[30px] mr-3 rounded-full opacity-60"
                    />
                  </div>
                  <div className="text-zinc-600 text-sm font-semibold">
                    Document Akash is ready to sign
                  </div>
                </div>
                <div className="flex items-center filter-container-notification p-4">
                  <div>
                    <img
                      src={NotificationIcon}
                      className="w-[30px] mr-3 rounded-full opacity-60"
                    />
                  </div>
                  <div className="text-zinc-600 text-sm font-semibold">
                    Document Akash is ready to sign
                  </div>
                </div>
                <div className="flex items-center  filter-container-notification p-4">
                  <div>
                    <img
                      src={NotificationIcon}
                      className="w-[30px] mr-3 rounded-full opacity-60"
                    />
                  </div>
                  <div className="text-zinc-600 text-sm font-semibold">
                    Document Akash is ready to sign
                  </div>
                </div>
                <div className="flex items-center filter-container-notification p-4">
                  <div>
                    <img
                      src={NotificationIcon}
                      className="w-[30px] mr-3   rounded-full opacity-60"
                    />
                  </div>
                  <div className="text-zinc-600 text-sm font-semibold">
                    Document Akash is ready to sign
                  </div>
                </div>
                <div className="text-center text-[12px] cursor-pointer mt-2 mb-2">
                  See more
                </div>
              </Popover>
            </div>
            <div>
              <IconButton onClick={handleAvatarOpenMenu}>
                <Avatar alt="User" src="./src/assets/avatar.png" />
              </IconButton>
              <Menu
                anchorEl={anchorE2}
                open={Boolean(anchorE2)}
                onClose={handleAvatarCloseMenu}
              >
                <MenuItem onClick={handleAvatarCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleAvatarCloseMenu}>Settings</MenuItem>
                <MenuItem onClick={handleAvatarCloseMenu}>Logout</MenuItem>
              </Menu>
            </div>
            <div
              className="text-sm font-normal mx-2 text-zinc-600 cursor-pointer"
              onClick={handleAvatarOpenMenu}
            >
              Akash Nigam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
