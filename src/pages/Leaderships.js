import React, { useEffect } from "react";
import "./leadership.css";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const SecondPage = (props) => {
  const { fullpageApi } = props;
  const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam.length > 0 ? state.ourTeamStore.ourTeam.filter(team => team.type === 'leader')
    .sort((a, b) => a.rank - b.rank) : []);

  useEffect(() => { }, []);
  return (
    <div className="aboutSection">
      <div className="leadership">
        <h1
          data-aos="fade-down" data-aos-offset="200"
          style={{ fontFamily: "nexa light", marginBottom: "5%" }}
        >
          Leadership
        </h1>

        <div class="row leaderShipRow">


          {ourTeam.length > 0
            ? ourTeam
              .map((leader, index) => {
                return (
                  <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol leadershipContainer">
                    <div
                      className={`img-holders`}
                    >
                      <LazyLoadImage
                        alt="Leader"
                        effect="blur" 
                        style={{width:"100%",height:"100%"}}
                        src={`${server}/${leader.image}`} 
                        />
                      <br />
                    </div>
                    <p>{leader.name}</p>
                    <br />
                    <p className="groups"> {leader.role}</p>
                  </div>)
              })
            : null}

        </div>
      </div>
    </div>
  );
};

export default SecondPage;
