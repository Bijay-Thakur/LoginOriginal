import React from "react";
import "./team.css";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";

const ThirdPage = (props) => {
  const { fullpageApi, normalRotate, setNormalRotate, team } = props;

  return (
    <div className="aboutSection">
      <div className="member">
            <h1
        data-aos="fade-down"
        style={{ fontFamily: "nexa light",marginBottom:"7%"}}
      >
        Team
      </h1>
      
      <div class="row teamRow">
        {team.length > 0
          ? team
              .sort((a, b) => a.rank - b.rank)
              .map((team, index) => {
                return (
                  <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol companyContainer">
                    <div
                      className={`img-holder`}
                    >
                      <img class="leaders" src={`${server}/${team.image}`}></img>
                      <br />
                    </div>
                    <p>{team.name}</p>
                    <br />
                    <p className="groups">{team.role}</p>
                  </div>
                )
              })
          : null}
          
      </div>
    </div>
    </div>



  );
};

export default ThirdPage;
