import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faGears,
  faUserGroup,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import './style.css';
import { useLocation } from "react-router-dom";
const MenuListItem = (props) => {
  const location = useLocation()
  return (
    <li  eventKey={`${props.href}`} onClick={()=>props.handleClose()}   className={` ${props.sideMenu && location.hash === props.href? 'sideMenuActive' : ''} ${props.className} menuItem`} {...props}>
      <div className="icon-container">

      {props.icon}
      </div>
      <a href={props.href}>{props.name}</a>
    </li>
  );
};

export default MenuListItem;
