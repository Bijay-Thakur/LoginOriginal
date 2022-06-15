import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "./style.css";
import Logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBiking,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { triggerSliderCollapse } from "../../../store/layoutStore/layoutStore.action";
import { connect, useDispatch } from "react-redux";

const SliderLayout = (props) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(triggerSliderCollapse());
  };
  const location = useLocation();
  let url = location.pathname;
  const [clickMenu, handleClick] = useState("");

  const { Sider } = Layout;
  const navigate = useNavigate();

  const mySelected = url.split("/")[url.split("/").length - 1];

  return (
    <div>
      <Sider
        trigger={null}
        className="adminSlider bigSlider"
        collapsible
        collapsed={props.sliderCollapse}
        collapsedWidth={0}
        style={{
          overflow: "auto",
          overflowX: "hidden",
          height: "100vh!important",
          position: "fixed",
          left: 0,
          paddingBottom: "70px",
        }}
      >
        <div className="adminLogo">
          <img
            src={Logo}
            style={{ height: `${props.sliderCollapse ? "90px" : "100px"}` }}
          />
        </div>
        <Menu
          className="sliderMenu"
          mode="inline"
          onClick={(e) => handleClick(e.key)}
          selectedKeys={[mySelected]}
          //  defaultOpenKeys={[myOpened]}
          defaultSelectedKeys={[mySelected]}
          // selectedKeys={[mySelected]}
        >
          <Menu.Item
            key="dashboard"
            onClick={() => {
              // toggle();
              return navigate("/admin/dashboard");
          }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="our-team"
            onClick={() => {
              // toggle();
              return navigate("/admin/our-team");
            }}
          >
            Our Team
          </Menu.Item>
          <Menu.Item
            key="our-company"
            onClick={() => {
              // toggle();
              return navigate("/admin/our-company");
            }}
          >
            Our Company
          </Menu.Item>
        </Menu>
      </Sider>

      {/* <Sider
        trigger={null}
        className="adminSlider smallSlider"
        collapsible
        collapsed={props.mobileCollapse}
        collapsedWidth={0}
        style={{
          overflow: "auto",
          overflowX: "hidden",
          height: "100vh!important",
          position: "fixed",
          left: 0,
          paddingBottom: "70px",
        }}
      >
        <div className="adminLogo mobileLogo">
          <div className="col-12">
            <img
              src={Logo}
              className="adminLogo"
              style={{ height: `${props.sliderCollapse ? "90px" : "160px"}` }}
              />
          </div>
          <div style={{ position: "absolute", right: "6px", top: "2px" }}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={toggle}
            />
          </div>
        </div>

        <Menu
          className="sliderMenu"
          mode="inline"
          onClick={(e) => handleClick(e.key)}
          selectedKeys={[mySelected]}
          //  defaultOpenKeys={[myOpened]}
          defaultSelectedKeys={[mySelected]}
          // selectedKeys={[mySelected]}
        >
          <Menu.Item
            key="dashboard"
            onClick={() => {
              toggle();
              return navigate("/admin/dashboard");
            }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="our-team"
            onClick={() => {
              toggle();
              return navigate("/admin/our-team");
            }}
          >
            Our Team
          </Menu.Item>
        </Menu>
      </Sider> */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  sliderCollapse: state.layoutStore.sliderCollapse,
  mobileCollapse: state.layoutStore.mobileCollapse,
});

export default connect(mapStateToProps)(SliderLayout);
