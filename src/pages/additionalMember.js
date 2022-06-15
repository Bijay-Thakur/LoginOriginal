import React from "react";
import './team.css';
import "aos/dist/aos.css";
import ImageFour from "../assets/images/b5.jpg";
 


const FourthPage=(props)=>{
  const { fullpageApi, normalRotate, setNormalRotate } = props;
    return(
        <div className="aboutSection">
          <h1 data-aos="fade-down" style={{fontFamily:"nexa light"}}>
            Team
          </h1>
   
          <div class="row teamRow">

          <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="100" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
          </div>

          <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="200" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
          </div>
        
          <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="300" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
           </div>
          
      </div>

      <div class="row teamRow">
   <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
   <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="400" data-aos-duration="500">
       <img class="leaders" src={ImageFour}></img><br/>
       </div>
       <p>Name</p><br/>
       <p className="groups"> Position</p></div>

    <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
    <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="500" data-aos-duration="500">

    <img class="leaders" src={ImageFour}></img><br/>
        </div>
    <p>Name</p><br/>
    <p className="groups">Position</p>
    </div>

      <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
      <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="600" data-aos-duration="500">
      <img class="leaders" src={ImageFour}></img><br/>
      </div>
      <p>Name</p><br/>
      <p className="groups"> Position</p>
        </div>

      </div>
     </div>
    )
}

export default FourthPage;