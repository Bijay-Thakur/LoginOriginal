import React, { useEffect } from "react";
import "./first.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const FirstPage = (props) => {
  const { fullpageApi, setNormalRotate } = props;
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);
  return (
    <div className="aboutSection">
      <h1
        data-aos="fade-down"
        style={{
          fontSize: "60px",
          fontFamily: "nexa light",
          marginBottom: "0px",
        }}
      >
        Welcome To Login
      </h1>
      <p className="wel">
        Scroll down and find out the ones who will bring your imgination to
        life.
      </p>
    </div>
  );
};

export default FirstPage;
