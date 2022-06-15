import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./portofolio.css";
import { Card } from "react-bootstrap";
import ImageFive from "../../assets/images/website1.webp";
import ImageSix from "../../assets/images/website2.webp";
import ImageSeven from "../../assets/images/website3.webp";
import ImageEight from "../../assets/images/website4.webp";
import OwlCarousel from 'react-owl-carousel';

const Website = () => {


  return (



    <div className="contents">
      <OwlCarousel className="websiteSection" loop={true} center={true} autoplay={true} nav={true} 
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
            mouseDrag: true,
            touchDrag: true,
            items: 1,
            margin: 300,
            dots:true,
          }

        }}

      >
        <div class="item">
          <img src={ImageFive} height={100} width={100} />
        </div>
        <div class="item">
          <img src={ImageSix} height={100} width={100} />
        </div>


        <div class="item">
          <img src={ImageSeven} height={100} width={100} />
        </div>
        <div class="item">
          <img src={ImageEight} height={100} width={100} />
        </div>
      </OwlCarousel>


    </div>


  )
}
export default Website;