import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BackgroundAudio from "../assets/audio/background.mp3";
import Dashboard from "../protectedPages/dashboard/Dashboard";
import Setting from "../protectedPages/setting/setting";
import PublicRoute from "./publicRoutes/publicRoutes";
import ResetPassword from "../protectedPages/login/resetPassword";
import ForgotPassword from "../protectedPages/login/forgotPassword";
import SuperRoute from "../components/privateRoute/index";
import Login from "../protectedPages/login/login.page";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
import ProtectedLayout from "../layout/protectedLayout/layout";
import OurTeam from "../protectedPages/ourTeam/ourTeam";
import AnimatingPages from "../animatingPages";
import OurCOmpany from "../protectedPages/ourCompany/ourCompany";
import { useDispatch } from "react-redux";
import { fetchingOurCompanyContentWithSpinnerStarts } from "../store/ourCompanyStore/ourCompanyAction";
import { fetchingOurTeamContentWithSpinnerStarts } from "../store/ourTeamStore/ourTeamAction";
import Apps from "../components/portofolio/apps";
import Ecommerce from "../components/portofolio/ecommerce";
import Website from "../components/portofolio/website";
import LogoSection from "../components/portofolio/logo";
function IndexRoute(props) {
  const dispatch = useDispatch()
  useEffect(()=>{

    sessionStorage.setItem("opened", "yes");
    dispatch(fetchingOurCompanyContentWithSpinnerStarts())
    dispatch(fetchingOurTeamContentWithSpinnerStarts());


  },[])
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage playSpaceAudio={props.playSpaceAudio} audioEvent={props.audioEvent} audioPause={props.audioPause}/>} />
        <Route path="/our-team" element={<OurTeamPage playSpaceAudio={props.playSpaceAudio} audioEvent={props.audioEvent} audioPause={props.audioPause} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/apps" element={<Apps/>}/>
        <Route path="/ecommerce" element={<Ecommerce/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/logo" element={<LogoSection/>}/>
        <Route
          public
          noLayout
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          exact
          path="/admin"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/our-team"
          element={
            <SuperRoute>
              <OurTeam />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <SuperRoute>
              <Setting />
            </SuperRoute>
          }
        /> 
         <Route
          path="/admin/our-company"
          element={
            <SuperRoute>
              <OurCOmpany />
            </SuperRoute>
          }
        /> 
         <Route path="/" element={<AnimatingPages audioEvent={props.audioEvent} audioPause={props.audioPause} playSpaceAudio={props.playSpaceAudio} />} />
      </Routes>
    </>
  );
}

export default IndexRoute;
