import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const ContactSection = (props) => {
  const { fullpageApi } = props;
  return (
    <div className="section">
      <div className="contactSection">
        <div className="slide">
          <div class="continfo" data-aos="fade-right" data-aos-duration="200" data-aos-delay="0" >
            <h4 style={{fontFamily:"nexa light"}}>Customer service</h4>
            <h2 style={{ marginLeft: "0px", fontFamily:"nexa light"}}>CUSTOMER</h2>
            <p>
              Feel free to reach out to us with any questions. We are very
              friendly and always open to discussing new projects, interesting
              ideas.
            </p>
            <div
              className="row contactInfoContainer"
              style={{ padding: "0", justifyFlex: "flex-start" }}
            >
              <div className=" contcol col-lg-6 col-md-4 col-sm-12">
                <h4 style={{fontFamily:"nexa light"}}>Contact</h4>
                Call: 9749761111
              </div>
              <div className=" contcol col-lg-6 col-md-4 col-sm-12">
                <h4 style={{fontFamily:"nexa light"}}>Address</h4>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Samakhushi, Kathmandu
                </span>
              </div>
            </div>
            Email: logincorpsnepal@gmail.com
          </div>

          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              Send messages
            </button>
          </div>
        </div>

        <div className="slide secondslide">
          <div className="row one" >
            <div className="col-md-6 col-lg-4 col-sm-0" style={{textAlign:"left"}}>
              <div className="eml">
              <h4 class="customer cst">Customer service</h4>
              <h2 class="customer ail" style={{ marginLeft: "0px" }}>
                EMAIL US
              </h2>
              </div>
              <button
                className="team intel" style={{marginLeft:"1px"}}
                onClick={() => fullpageApi.moveSlideLeft()}
              >
              Information
              </button>
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12" style={{textAlign:"left"}}>
              <Form className="msgus">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="FormBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                  {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone No:</Form.Label>
                  <Form.Control type="number"  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Messages</Form.Label>
                  <Form.Control className="msg" type="text"  />
                </Form.Group>
                {/* 
  <Form.Group className="mb-3" controlId="FormBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

                <ReCAPTCHA
                  className="capt"
                  sitekey="6LeH_AIfAAAAAIeF4Rod6Wofc0KfYB4IUJi7L5L5"
                />

                <Button  className="sendButton" type="submit" style={{width:"99%", marginTop:"15px",backgroundColor:"#ff1a75",borderColor:"transparent",borderRadius:"20px"}}>
                  Send
                </Button>
                <button
                className="team smallteam" style={{display:"none"}}
                onClick={() => fullpageApi.moveSlideLeft()}
              >
              Information
              </button>
              </Form>
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
