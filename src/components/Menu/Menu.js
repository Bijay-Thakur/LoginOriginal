import React from "react";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faInfo,
  faCopy,
  faGraduationCap,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import MenuListItem from "../menuListItem/menuListItem";
const Menu = () => {
  return (
    <ul id="myMenu" className="menu leftMenu d-md-block d-none">
      <MenuListItem
        data-menuanchor="homePage"
        // className="active"
        href="#homePage"
        icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
        name="Home"
      />
      <MenuListItem
        data-menuanchor="aboutPage"
        href="#aboutPage"
        icon={<FontAwesomeIcon icon={faInfo} className="icon" />}
        name="About us"
      />
       <MenuListItem
        data-menuanchor="portfolioPage"
        href="#portfolioPage"
        icon={<FontAwesomeIcon icon={faCopy} className="icon" />}
        name="Portfolio"
      />
       <MenuListItem
        data-menuanchor="Services"
        href="#Services"
        icon={<FontAwesomeIcon icon={faGears} className="icon" />}
        name="Services"
      />{" "}
      <MenuListItem
        data-menuanchor="Testimonials"
        href="#Testimonials"
        icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
        name="Testimonials"
      />{" "}
      <MenuListItem
        data-menuanchor="contactUs"
        href="#contactUs"
        icon={<FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
        name="Contacts"
      />
    </ul>
  );
};

export default Menu;
