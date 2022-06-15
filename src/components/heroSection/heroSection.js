import React from "react";
 import './hero.css'
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const HeroSection=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="section heroSection">
         <div className="hero">
          <h2 data-aos="fade-down" data-aos-duration="400" data-aos-offset="30px">
            "Let us make our future now and let us make our dreams a reality."
          </h2>
          <p data-aos="fade-up" data-aos-duration="400" data-aos-offset="30px">
          - WELCOME TO LOGIN
        </p>
        </div>
        <button
          class="bt1 hers endButtonContainer d-md-block d-none "
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <div className="endButton"></div>
        </button>
      </div>
     
    )
}

export default HeroSection;