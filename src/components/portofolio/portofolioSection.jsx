import React, { useEffect, useRef, useState } from "react";
import "./portofolio.css";
import OwlCarousel from 'react-owl-carousel';
import { Card } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import LogoSection from "./logo";
import Apps from "./apps";
import Ecommerce from "./ecommerce";
import Website from "./website"
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import $ from "jquery";
import ImageFive from "../../assets/images/website1.webp";
import ImageSix from "../../assets/images/website2.webp";
import ImageSeven from "../../assets/images/website3.webp";
import ImageEight from "../../assets/images/website4.webp";
import ImageTen from "../../assets/images/ecommerce1.webp";
import ImageEleven from "../../assets/images/ecommerce2.webp";
import ImageTwelve from "../../assets/images/ecommerce3.webp";
import TabsComponent from "../Tabs/tabsComponent";


const PortofolioSection = (props) => {
  const belowSlider = useRef(null)
  const upperSlider = useRef(null)

  const onBtnClick = (index) => {
    console.log("ondex", index)
    upperSlider.current.to(index, 300)
    belowSlider.current.to(index, 300)
    // const owl = $('.portofolio')
    // console.log("owl", owl)
    // owl.trigger('next.owl.carousel')
  }


  const { fullpageApi } = props;
  const options = {
    center: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    draggable: true,
    margin: 10,
    nav: true,
    items: 1,
    dots:true,
  
    loop: true,
  };

  return (
    <div className="section portofolioSectiion" style={{ width: "75%" }}>

    
  <TabsComponent/>



      <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button>
    </div>
  );
};

export default PortofolioSection;
