import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';

import "./portofolio.css";
import ImageThirteen from "../../assets/images/logo5.jpg";
import ImageFourteen from "../../assets/images/logo4.jpg";
import ImageFifteen from "../../assets/images/logo3.jpg";
import ImageSixteen from "../../assets/images/logo1.jpg";
import ImageSeventeen from "../../assets/images/logo2.jpg";

const LogoSection = () => {
    return (
      
      <div className="contents">
      
      <OwlCarousel  className="logoSection" loop={true} center={true} autoplay={true} nav={true} style={{display:"flex",justifyContent:"center"}}
        responsiveClass={true}
        callbacks={true}
        responsive={{
          // breakpoint from 0 up
          0: {
            // stagePadding: 0,
            loop: true,
            center: true,
            autoplay: true,
            nav: true,
            items: 1,
            dots:true,
          }

        }}

      >
        <div class="item">
 <img src={ImageThirteen} height={100} width={100}/>
 </div>
        <div class="item">
        <img src={ImageFourteen} height={100} width={100}/>
        </div>

        <div class="item">
        <img src={ImageFifteen} height={100} width={100}/>  
              </div>


        <div class="item">
        <img src={ImageSixteen} height={100} width={100}/>  
              </div>
              <div class="item">
        <img src={ImageSeventeen} height={100} width={100}/>  
              </div>
      </OwlCarousel>
         
        
          
      </div>

    )
}
export default LogoSection;