import React, { useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faInfoCircle,
  faCopy,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuListItem from "../menuListItem/menuListItem";
import Logo from "../../assets/images/loginLogo.png";

const Navigation = (props) => {
  const offCanvas = useRef();
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  const { navigateTo, navigationToName } = props;
  return (
    <Navbar bg="transparent" className="navbarZIndex" expand={false}>
      <div className="navContainer">
        <Link to="/">
          <div className="logo">
            <div className="container">
              <img src={Logo} width="100px"></img>

            </div>
          </div>
        </Link>
        <Link className="team d-md-block d-none navteam" to={navigateTo}>{navigationToName}</Link>
        <Navbar.Toggle
          onClick={handleShow}
          aria-controls="offcanvasNavbar"
          className="d-md-none d-block closeButton"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="top"
          onHide={handleClose}
          show={showCanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Link className="teambtn" to={navigateTo}>{navigationToName}</Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul
              id="linkit"
              className="links sideMenu"
              defaultActiveKey="#firstPage"
              variant="tabs"
            >
              <MenuListItem
                data-menuanchor="firstPage"
                handleClose={handleClose}
                sideMenu
                closeButton
                href="#homePage"
                icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
                name="Home"
              />
              <MenuListItem
                data-menuanchor="secondPage"
                handleClose={handleClose}
                sideMenu
                href="#aboutPage"
                icon={<FontAwesomeIcon icon={faInfoCircle} className="icon" />}
                name="About us"
              />
               <MenuListItem
                data-menuanchor="thirdPage"
                handleClose={handleClose}
                sideMenu
                href="#portfolioPage"
                icon={<FontAwesomeIcon icon={faCopy} className="icon" />}
                name="Portfolio"
              />{" "}
             <MenuListItem
                data-menuanchor="fourthPage"
                handleClose={handleClose}
                sideMenu
                href="#Services"
                icon={<FontAwesomeIcon icon={faGears} className="icon" />}
                name="Services"
              />{" "}
              <MenuListItem
                data-menuanchor="fifthPage"
                handleClose={handleClose}
                sideMenu
                href="#Testimonials"
                icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
                name="Testimonials"
              />{" "}
              <MenuListItem
                data-menuanchor="sixththPage"
                handleClose={handleClose}
                sideMenu
                href="#contactUs"
                icon={<FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
                name="Contacts"
              />
            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
};

export default Navigation;
