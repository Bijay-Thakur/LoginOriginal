import React from "react";
import './Footer.css'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright, faVolumeMute, faVolumeUp
} from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  const { audioEvent, audioPause, playSpaceAudio } = props
  return (<footer class="copyright">
    <div class="copy">
      <FontAwesomeIcon icon={faCopyright} />
      Copyright Login Corporation
    </div>

   

    <div class="items">
    <div class="volume" >
      {playSpaceAudio ? <FontAwesomeIcon icon={faVolumeUp} onClick={() =>{ 
        audioPause()
       }} />
        : <FontAwesomeIcon icon={faVolumeMute} onClick={() => {
          audioEvent()
         }} />}
        </div>
      <a
        class="social"
        href="https://www.facebook.com/Login-Designs-2284503471807329/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        class="social"
        href="https://www.linkedin.com/in/login-pvt-ltd-4b93a7172"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        class="social"
        href="https://www.twitter.com/LoginLtd"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        class="social"
        href="https://www.instagram.com/loginpvtltd/?hl=en"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </footer>
  )
};

export default Footer