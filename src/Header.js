import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";
const Header = () => {
  const user = useSelector(selectUser);
 
  const { displayName, email, } = user;

  
  const dispatch = useDispatch();
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"
          alt=""
        />

        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={HubIcon} title={"My NetWork"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsActiveIcon} title={"Notifications"} />
        <HeaderOption
          avatar={
            user.photoURL || displayName[0].toUpperCase()
          }
          title={"me"}
          onClick={logOutApp}
        />
      </div>
    </div>
  );
};

export default Header;
