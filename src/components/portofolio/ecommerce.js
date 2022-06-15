import React from "react";
import "./portofolio.css";
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from "react-owl-carousel";
import ImageTen from "../../assets/images/ecommerce1.webp";
import ImageEleven from "../../assets/images/ecommerce2.webp";
import ImageTwelve from "../../assets/images/ecommerce3.webp";





const Ecommerce = () => {

  return (
    <div className="contents">
      
    <OwlCarousel  className="ecommerceSection" loop={true} center={true} autoplay={true} nav={false} style={{display:"flex",justifyContent:"center"}}
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
            dots:true
          }

        }}

      >
        <div class="item">
          <img src={ImageTen} height={100} width={100} />
        </div>


        <div class="item">
          <img src={ImageEleven} height={100} width={100} />
        </div>


        <div class="item">
          <img src={ImageTwelve} height={100} width={100} />
        </div>

      </OwlCarousel>


    </div>
  )
}
export default Ecommerce;
