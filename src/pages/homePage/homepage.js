import "./style.css";

import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../../components/particle/particle";
import Navigation from "../../components/Navigationbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/heroSection/heroSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import PortofolioSection from "../../components/portofolio/portofolioSection";
import ContactSection from "../../components/contactSection/contactSection";
import ScrollSound from "../../assets/audio/slideGem.mp3";
import BackgroundAudio from "../../assets/audio/background.mp3";
import Menu from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import $ from "jquery";
import AOS from "aos";
import ServicesSection from "../../components/servicesSection/servicesSection";
import AluminiSection from "../../components/testimonialSection/testimonialSection";

import AnimatingPages from "../../animatingPages";
import { useSelector } from "react-redux";

function HomePage(props) {
  const {fullpageApi} = props
  const [audio, setAudio] = useState(new Audio(ScrollSound));
  // const [spaceAudio, setSpaceAudio] = useState(new Audio(BackgroundAudio));
  // const playAudio = () => {
  //   spaceAudio.play();
  //   spaceAudio.loop = true;
  // };
  useEffect(()=>{
    // props.audioEvent()
  },[])
  const [displayAnimatingPage, setDisplayAnimatingPage] = useState(
    sessionStorage.getItem("opened") ? true : false
  );

  useEffect(() => {
    if (sessionStorage.getItem("playSound")) {
      
    }
  }, []);

  const anchors = [
    "homePage",
    "aboutPage",
    "portfolioPage",
    "Services",
    "Testimonials",
    "contactUs",
  ];
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {displayAnimatingPage ? (
        <AnimatingPages setDisplayAnimatingPage={setDisplayAnimatingPage} />
      ) : (
        <div className="Appmenu Section_top">
          <Particle />
          <Navigation navigateTo="/our-team" navigationToName="Our Team" />
          <Menu />
          <ReactFullpage
            //fullpage options
            lockAnchors={false}
            anchors={anchors}
            navigation={true}
            navigationPosition={"right"}
            showActiveTooltip={false}
            slidesNavigation={true}
            slidesNavPosition={"top"}
            licenseKey={"YOUR_KEY_HERE"}
            menu={"#myMenu"}
            scrollingSpeed={1000} /* Options here */
            onLeave={() => {
              audio.play();
              $(".section [data-aos]").removeClass("aos-animate");
            }}
            onSlideLeave={function () {
              $(".slide [data-aos]").removeClass("aos-animate");
            }}
            afterSlideLoad={function () {
              $(".slide.active [data-aos]").addClass("aos-animate");
            }}
            afterLoad={() => {
              $(".section.active [data-aos]").addClass("aos-animate");
            }}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="container">
                  <HeroSection fullpageApi={fullpageApi} />
                    <AboutSection fullpageApi={fullpageApi} />
                    <PortofolioSection fullpageApi={fullpageApi} />
                    <ServicesSection fullpageApi={fullpageApi} />
                    <AluminiSection fullpageApi={fullpageApi} />
                    <ContactSection fullpageApi={fullpageApi} />
             
                  </div>

                </ReactFullpage.Wrapper>
              );
            }}
          />
          );
          {/* <div className="send-bottom-btn">
          <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button>
          </div> */}
          <Footer audioEvent={props.audioEvent} audioPause={props.audioPause} playSpaceAudio={props.playSpaceAudio}/>
        </div>
      )}
    </>
  );
}

export default HomePage;
