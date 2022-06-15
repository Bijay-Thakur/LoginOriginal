import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage/homepage";
import OurTeamPage from "../../pages/ourTeam";
import ReactAudioPlayer from "react-audio-player";
import BackgroundAudio from "../../assets/audio/background.mp3";

function PublicRoute() {
  const [spaceAudio, setSpaceAudio] = useState(new Audio(BackgroundAudio));
  const audioEvent = (e) => {
    spaceAudio.play();
    spaceAudio.loop = true;
  };
  useEffect(() => {
    sessionStorage.setItem("opened", "yes");
    spaceAudio.play();
    spaceAudio.loop = true;

    document.addEventListener("mousemove", audioEvent);

    return () => {
      document.removeEventListener("mousemove", audioEvent);
    };
  }, []);

  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
    </>
  );
}

export default PublicRoute;
