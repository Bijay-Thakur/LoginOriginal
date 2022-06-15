import React from "react";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Container } from "react-bootstrap";

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const ServicesSection = (props) => {
  const { fullpageApi } = props;
  return (
    <div className="section serviceSection">
      <div className="serviceFullScreen">
        <Container class="cont" style={{ marginTop: "140px",marginLeft:"18%"}}>
          <p className="feel">
            We feel privileged to offer creative and innovative services to you.
          </p>
          <div className="row rowl">
            {/* <div className="col-lg-2 col-md-0"></div> */}
            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> LEGAL SERVICE
              </h5>

              <ul>
                <li>Company Registration</li>
                <li>PAN/VAT Registration</li>
                <li>Trademark Registration</li>
              </ul>
            </div>
            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> MULTIMEDIA SERVICE
              </h5>

              <ul>
                <li>Logo and Graphic Design</li>
                <li>Branding and Printing</li>
                <li>Photography and Videography</li>
                <li>Animation</li>
              </ul>
            </div>
          </div>
          <div className="row rowf">
            {/* <div className="col-lg-2 col-md-0"></div> */}

            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> FINANCE SERVICE
              </h5>

              <ul>
                <li>Accounting</li>
                <li>Auditing</li>
                <li>Taxation</li>
                <li>Advisory</li>
                <li>Investment</li>
              </ul>
            </div>
            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> IT SERVICE
              </h5>
              <ul>
                <li>Website Design and Development</li>
                <li>Android Application Development</li>
                <li>iOS Application Development</li>
                <li>Web Application Development</li>
                <li>Software Development</li>
                <li>IT Support</li>
              </ul>
            </div>
          </div>
          <div className="row rowm">
            {/* <div className="col-lg-2 col-md-0"></div> */}

            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> MARKETING SERVICE
              </h5>

              <ul>
                <li>Strategy Planning and Production</li>
                <li>TV and Radio Commercials</li>
                <li>Digital Marketing and SEO</li>
                <li>Social Media Marketing </li>
                <li>Product and Service Promotion</li>
              </ul>
            </div>
            <div
              className="column col-lg-5 col-md-6 col-xs-12"
              style={{ textAlign: "left" }}
            >
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> BUSINESS SERVICE
              </h5>

              <ul>
                <li>Business Consultancy</li>
                <li>New Business Estalishment</li>
                <li>Idea and Research</li>
                <li>Sales Strategy</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      
      <div className="serviceSmallScreen">
        <div className="slide">
          <p className="feel">
            We feel privileged to offer creative and innovative services to you.
          </p>
          <div className="col">
            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> LEGAL SERVICE
              </h5>

              <ul>
                <li>Company Registration</li>
                <li>PAN/VAT Registration</li>
                <li>Trademark Registration</li>
              </ul>
            </div>
            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> MULTIMEDIA SERVICE
              </h5>

              <ul>
                <li>Logo and Graphic Design</li>
                <li>Branding and Printing</li>
                <li>Photography and Videography</li>
                <li>Animation</li>
              </ul>
            </div>
            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> FINANCE SERVICE
              </h5>

              <ul>
                <li>Accounting</li>
                <li>Auditing</li>
                <li>Taxation</li>
                <li>Advisory</li>
                <li>Investment</li>
              </ul>
              <button
                class="serviceNext"
                onClick={() => fullpageApi.moveSlideRight()}
              >
                see more
              </button>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="col" style={{ textAlign: "left" }}>
            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> IT SERVICE
              </h5>
              <ul>
                <li>Website Design and Development</li>
                <li>Android Application Development</li>
                <li>iOS Application Development</li>
                <li>Web Application Development</li>
                <li>Software Development</li>
                <li>IT Support</li>
              </ul>
            </div>
            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> MARKETING SERVICE
              </h5>
              <ul>
                <li>Strategy Planning and Production</li>
                <li>TV and Radio Commercials</li>
                <li>Digital Marketing and SEO</li>
                <li>Social Media Marketing </li>
                <li>Product and Service Promotion</li>
              </ul>
            </div>

            <div className="row-md-6">
              <h5>
                <FontAwesomeIcon icon={faArrowRight} /> BUSINESS SERVICE
              </h5>

              <ul>
                <li>Business Consultancy</li>
                <li>New Business Estalishment</li>
                <li>Idea and Research</li>
                <li>Sales Strategy</li>
              </ul>
            </div>

            <button
              class="servicePrev"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
            back
            </button>
          </div>
        </div>
      </div>
      <div className="endbtncontainer">
        <button
          class="bt1 serv endButtonContainer d-md-block d-none" style={{marginLeft:"10%"}}
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <div className="endButton"></div>
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
