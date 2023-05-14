import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const HeaderOption = ( { avatar, Icon,  title, onClick} ) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
     {Icon && <Icon className='headerOption__icon'/>}
     {avatar && <Avatar alt="" src={avatar}>{avatar}</Avatar>}
     <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}
export default HeaderOption;