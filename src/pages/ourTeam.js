import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../components/particle/particle";
import FirstPage from "./firstpage";
import SecondPage from "./Leaderships";
import ThirdPage from "./Team";
import FourthPage from "./additionalMember";
import Navigation from "../components/Navigationbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollSound from "../assets/audio/slideGem.mp3";
import "./ourTeam.css";
import $ from "jquery";
import AnimatingPages from "../animatingPages";
import { useDispatch, useSelector } from "react-redux";
import { fetchingOurTeamContentWithSpinnerStarts } from "../store/ourTeamStore/ourTeamAction";
import AOS from "aos";
const OurTeamPage = (props) => {
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio(ScrollSound));
  const [displayAnimatingPage, setDisplayAnimatingPage] = useState(
    sessionStorage.getItem("opened") ? true : false
  );
  const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam);
  let anchors = ["ourTeam", "leadership"]
  useEffect(()=>{
    if (ourTeam.filter(team => team.type === 'leader').length > 6) {
      anchors.push('leadership1')
      anchors.push('leadership2')
    } else if (ourTeam.filter(team => team.type === 'leader').length > 12) {
      anchors.push('leadership1')
      anchors.push('leadership2')
      anchors.push('leadership3')
    } else {
      anchors.push('leadership')
    }
    if (ourTeam.filter(team => team.type === 'team').length > 6) {
      anchors.push('teamMembers1')
      anchors.push('teamMembers2')
    } else if (ourTeam.filter(team => team.type === 'team').length > 12) {
      anchors.push('teamMembers1')
      anchors.push('teamMembers2')
      anchors.push('teamMembers3')
    } else {
      anchors.push('teamMembers')
    }
  },[ourTeam])
  

  useEffect(() => {
    dispatch(fetchingOurTeamContentWithSpinnerStarts());
    AOS.init({ duration: 1500, once: false });
  }, []);
  return (
    <>
      {displayAnimatingPage ? (
        <AnimatingPages setDisplayAnimatingPage={setDisplayAnimatingPage} />
      ) : (
        <div className="teamPage teamPageContainer">
          {/* <AnimatingPages/> */}
          <Particle />
          <Navigation navigateTo="/" navigationToName="Home" />
          <ReactFullpage
            //fullpage options
            lockAnchors={false}
            anchors={anchors}
            sectionSelector={".aboutSection"}
            navigation={true}
            navigationPosition={"right"}
            navigationTooltips={["firstSlide", "secondSlide"]}
            showActiveTooltip={false}
            slidesNavigation={true}
            slidesNavPosition={"top"}
            licenseKey={"YOUR_KEY_HERE"}
            onLeave={() => {
              audio.play();
              $(".aboutSection [data-aos]").removeClass("aos-animate");
            }}
            onSlideLeave={function () {
              $(".slide [data-aos]").removeClass("aos-animate");
            }}
            afterSlideLoad={function () {
              $(".slide.active [data-aos]").addClass("aos-animate");
            }}
            afterLoad={() => {
              $(".aboutSection.active [data-aos]").addClass("aos-animate");
            }}
            scrollingSpeed={1000} /* Options here */
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="container">
                    <FirstPage fullpageApi={fullpageApi} />
                    {/* <SecondPage fullpageApi={fullpageApi} /> */}
                    <SecondPage fullpageApi={fullpageApi} ourTeam={ourTeam.length > 0 ? ourTeam.filter(team => team.type === 'leader').slice(0, 6) : []} />
                    {
                      // ourTeam.length > 6 ? <SecondPage fullpageApi={fullpageApi} ourTeam={ourTeam.length > 0 ? ourTeam.filter(team => team.type === 'leader').slice(6, 12) : []} /> : null
                    }
                    <ThirdPage fullpageApi={fullpageApi} team={ourTeam.length > 0 ? ourTeam.filter(team => team.type === 'team').slice(0, 6) : []} />
                    {
                      ourTeam.length > 6 ? <ThirdPage fullpageApi={fullpageApi} team={ourTeam.length > 0 ? ourTeam.filter(team => team.type === 'team').slice(6, 12) : []} /> : null
                    } 
                    {/* <FourthPage fullpageApi={fullpageApi} /> */}

                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
          <Footer  audioEvent={props.audioEvent} audioPause={props.audioPause} playSpaceAudio={props.playSpaceAudio} />
        </div>
      )}
    </>
  );
};

export default OurTeamPage;
