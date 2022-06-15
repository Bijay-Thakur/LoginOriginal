import React from "react";
import "./portofolio.css";
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageNine from "../../assets/images/apps.jpg";


const Apps = () => {
 
    return (

        

      <div className="contents">
      
      <OwlCarousel  className="appSection" loop={true} center={true} autoplay={true} nav={false} style={{display:"flex",justifyContent:"center"}}
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
 <img src={ImageNine} height={100} width={100}/>
 </div>
       


      
      </OwlCarousel>
       

       

        
      </div>

       
    )
}
export default Apps;