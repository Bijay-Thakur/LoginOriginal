import React, { useEffect, useState } from "react";
import "./firstpage.css";
import ImageInt from "../assets/images/login.png";
import Typing from "react-typing-animation";

const FirstPage = (props) => {
  const {
    setDisplayMainPage,
    setPlaySpaceAudio,
    typingAudio,
    speakerAudio,
    playSpaceAudio,
    setSpeakerAudio,
    displayMainPage,
    audioEvent,
    audioPause
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const [secondParagraph, setSecondParagraph] = useState(false);

  return (
    <div className="titleFrontPage">
      {!showDetails ? (
        <div style={{ width: "90%", marginLeft: "auto" }}>
          <h3>Hello, Welcome To Login!</h3>
          <p style={{ fontSize: "18px" }}>
            {" "}
            Would you like to experience website with sound ?
          </p>
          <div className="forbtn">
            <div className="line" />
            <button
              class="btn1"
              onClick={() => {
                setShowDetails(true);
                audioEvent()
              }}
              style={{ fontSize: "18px" }}
            >
              Yes please !
            </button>

            <button
              class="btn1 "
              onClick={() => {
                audioPause();
                setDisplayMainPage(true);
              }}
              style={{ fontSize: "18px" }}
            >
              No !
            </button>
          </div>
        </div>
      ) : (
        <div className="Login">
          <div className="login">
            <img src={ImageInt} height="113px" width={"330px"} />
          </div>
          {sessionStorage.setItem("playSound", "true")}
          {!displayMainPage ? (
            <Typing
              speed={120}
              hideCursor={true}
              onStartedTyping={() => {
                typingAudio.play();
              }}
              onFinishedTyping={() => {
                setSecondParagraph(true);
                typingAudio.pause();
              }}
            >
              <h2>Everyone a has Story to Tell,</h2>
            </Typing>
          ) : null}

          {secondParagraph ? (
            <>
              <Typing
                speed={60}
                hideCursor={true}
                onStartedTyping={() => {
                  speakerAudio.play();
                }}
                onFinishedTyping={() => {
                  // setPlaySpaceAudio(true);
                  // setDisplayMainPage(true);
                }}
              >
                <p
                  style={{ marginLeft: "12px", width: "70%", fontSize: "16px", marginRight: "auto" }}
                >
                  In the end of the 5th century before our time the first jewels
                  were brought to Europe. Since then many have tried to recreate
                  something similar in value and in beauty. Some have achieved,
                  however many have failed because of their lack of knowledge,
                  time or other resources. To this day jewels are thought to be
                  one of the most precious gems on earth. Although we don't
                  create jewels, we do imagine ourselves as jewelers. Just from
                  a different angle.
                </p>
              </Typing>
              <div className="forbtn" style={{ marginLeft: "12px", position: "absolute", bottom: "13px" }}>
                <div className="line" />
                <button
                  class="btn1"
                  onClick={() => {
                    setDisplayMainPage(true);
                    // setPlaySpaceAudio(true);
                    typingAudio.pause();
                    speakerAudio.pause();
                  }}
                >
                  Skip our Story
                </button>
              </div>
            </>
          ) : null}

        </div>

      )}
    </div>
  );
};
export default FirstPage;
