import React from "react";
import "./testimonial.css";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageOne from "../../assets/images/pushpaUparkoti.webp";
import ImageTwo from "../../assets/images/surajJung.webp";
import ImageThree from "../../assets/images/yugeshChaudhary.webp";
import ImageFour from "../../assets/images/kamleshShrestha.webp";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const AluminiSection = (props) => {
 
  const { fullpageApi } = props;
  return (
    <div className="section almuniSection">
     

      <h1 className="test" data-aos="fade-down" data-aos-duration="300" data-aos-delay="0">Testimonials</h1>
      <div>
        <OwlCarousel className="owl-theme testimonial" loop={true} center={true} autoplay={true}  nav={false}
            responsiveClass={true}

        responsive={{
            // breakpoint from 0 up
            0 : {
              // stagePadding: 0,
              loop: true,
              center: true,
              autoplay: true,
              nav: true,
              items: 1
            },
            768 : {
              items: 2,
              center: true,
              center: false,

            },
            992 : {
              items: 3,
              center: true,
              margin: 5,
            },
           
          }}
        >
          <div class="item">
            <Card class="cards"
             
            ><div className="imgholder">
              <img className="photo" src={ImageOne}></img></div>
              <Card.Body>
                <Card.Title className="head"><h5>Pushpa Uparkoti</h5></Card.Title>
                <p style={{color:"#ffffff",opacity:"50%"}} className="cardText">
                 "40% increase in site visits and 17% increases in sales, in just 2 months. What a wonderful turnaround!"
                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
              
            >
              <div className="imgholder">
              <img
                className="photo"
                src={ImageTwo}
              ></img>
              </div>
              <Card.Body>
                <Card.Title className="head"><h5>Suraj Jung Thapa</h5></Card.Title>
                <p style={{color:"#ffffff",opacity:"50%"}} className="cardText" >
                " You guys made it so simple. My new site is just visually so pleasing. Just yesterday some of my customers message me saying how much they liked the new site. Thank you guys!"
                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
             
            >
             <div className="imgholder">
              <img
                className="photo"
                src={ImageThree}
              ></img>
              </div>
              
              <Card.Body>
                <Card.Title className="head"><h5>Yugesh Chaudhary</h5></Card.Title>
                <p style={{color:"#ffffff",opacity:"50%"}} className="cardText" >
                  "Choosing your services for us is best. Responsibility for client satisfaction is great! Very responsible,very helpful, very suggestive team."
                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
          
            > 
            <div className="imgholder">
              <img
                className="photo"
                src={ImageFour}
              ></img> 
              </div>
              <Card.Body>
                <Card.Title className="head"><h5>Kamlesh Shrestha</h5></Card.Title>
                <p style={{color:"#ffffff",opacity:"50%"}} className="cardText" >
                  "They have done an absolutely grea job for my company's Logo design.Professional and really passionate"
                </p>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </div>
      <button
        class="bt1 abt d-md-block d-none endButtonContainer" style={{left:"45%"}}
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button>
    </div>
  );
};

export default AluminiSection;
