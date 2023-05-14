import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
const Sidebar = () => {
  
  const user = useSelector(selectUser);
  
  console.log("Hii From side bar!! = ", user);
  const { displayName, email,photoURL } = user;


 const recentItems = (topic) => {

  return (
    <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
   </div>
  );
  
 }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <Avatar src={photoURL} className="sidebar__avatar" >{email[0]?.toUpperCase() || ''}</Avatar>
        <h2>{displayName}</h2>
        <p>{email}</p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">22,552</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,525</p>
        </div>
      </div>

      <div className="sidebar__button">
        <h4>Recent</h4>
        {recentItems('reactjs')}
        {recentItems('Programming')}
        {recentItems('softwareEngineering')}
        {recentItems('design')}
        {recentItems('developer')}
      </div>
    </div>
  );
};

export default Sidebar;
