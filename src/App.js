import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Intro/firstPage";
import { useEffect, useRef, useState } from "react";
import AnimatingPages from "./animatingPages";
import Speaker from "./assets/audio/intro-speech.mp3";
import TypingSound from "./assets/audio/typing.mp3";
import BackgroundAudio from './assets/audio/background.mp3';
import RouteIndex from "./routes";
import AOS from "aos";

import "aos/dist/aos.css";
import { useSelector } from "react-redux";
function App() {
  const ourTeamSpinner = useSelector(state => state.ourTeamStore.ourTeamSpinner)
  const spaceAudio = useRef(new Audio(BackgroundAudio));
  const audioEvent = (e) => {
    setPlaySpaceAudio(true)
    spaceAudio.current.play();
    spaceAudio.current.loop = true;
  };
  const audioPause = (e) => {
    setPlaySpaceAudio(false)
    spaceAudio.current.pause();
  };
  const [displayMainPage, setDisplayMainPage] = useState(false);
  const [displaySecondLoadingPage, setDisplaySecondLoadingPage] =
    useState(false);
  const [displayFirstLoadingPage, setDisplayFirstLoadingPage] = useState(
    sessionStorage.getItem("opened") ? false : true
  );
  const [playSpaceAudio, setPlaySpaceAudio] = useState(false);

  const [speakerAudio, setSpeakerAudio] = useState(new Audio(Speaker));
  const [typingAudio, setTypingAudio] = useState(new Audio(TypingSound));

  const moveToMainScreen = () => {
    setDisplayMainPage(true);
  };

  useEffect(() => {
    if (displayMainPage) {
      setTypingAudio(null);
      setSpeakerAudio(null);
    }
  }, [displayMainPage]);
  const speakerAudioPlaying = () => {
    if (displayMainPage) {
      speakerAudio.pause()
      // spaceAudio.play();
    }
  };
  useEffect(() => {
    setPlaySpaceAudio(false)
    AOS.init({});
    // AOS.refresh();
  }, []);
  useEffect(() => {

    speakerAudio.addEventListener("ended", moveToMainScreen);
    speakerAudio.addEventListener("playing", speakerAudioPlaying);

    return () => {
      speakerAudio.removeEventListener("ended", moveToMainScreen);
      speakerAudio.removeEventListener("playing", speakerAudioPlaying);
    };
  }, []);

  return (
    <div>
      <div className="nonVisible"></div>
      {displayMainPage || !displayFirstLoadingPage ? (
        <RouteIndex speakerAudio={speakerAudio}  setPlaySpaceAudio={setPlaySpaceAudio}  playSpaceAudio={playSpaceAudio} typingAudio={typingAudio}   audioPause={audioPause} audioEvent={audioEvent}/>
      ) : (
        <FirstPage
          playSpaceAudio={playSpaceAudio}
          setPlaySpaceAudio={setPlaySpaceAudio}
          speakerAudio={speakerAudio}
          setSpeakerAudio={setSpeakerAudio}
          typingAudio={typingAudio}
          setTypingAudio={setTypingAudio}
          setDisplayMainPage={setDisplayMainPage}
          displayMainPage={displayMainPage}
          audioEvent={audioEvent}
          audioPause={audioPause}
        />

      )
      }

    </div>
  );
}

export default App;
