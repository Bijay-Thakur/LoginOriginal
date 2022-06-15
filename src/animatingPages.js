import React, { useState } from "react";
import "./animatingPages.css";
import ImageInt from "./assets/images/login.png";
import { CSSTransition, Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  // entering: { opacity: 1 },
  // entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0 },
};


function AnimatingPages(props) {
    const {setDisplayAnimatingPage, setPlaySpaceAudio, displayMainPage} = props
    const [showPage, setShowPage] = useState(true)
    const loadMainPage = ()=>{
        setTimeout(()=>{
            setShowPage(false)
        },8000)
    }
  return (
    <CSSTransition
        in={showPage}
        timeout={300}
        classNames="alert"
        onExiting={() => setDisplayAnimatingPage(false) }
        unmountOnExit
      >
      <div className="animpage smallanimpage">
      {loadMainPage()}
    </div>
</CSSTransition>
  );
}

export default AnimatingPages;
