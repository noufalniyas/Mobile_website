import React from "react";
import "./ServiceCardComp.css";
import brokenImg from "../../Assets/BrokenDisplay.jpg";
import brokenBack from "../../Assets/backdoorImage.jpg";
import MobileGlass from "../../Assets/DisplayGlass.jpg";

const ServiceCardComp = () => {
  return (
    <div className="serviceCard">
      <div className="cards  flex-lg-row flex-md-column align-items-center">
        <div className="card-service">
          <div className="upperCard">
            <img src={brokenImg} alt="How to repair my broken display " />
            <h1 className="fw-bold m-3">Display Replacement</h1>
          </div>
          <div className="lowerCard">
            <p className=" lh-lg">
              Display replacement for all type of mobiles, <br />
              After replacement touch senstivity will be as same quality as a
              new mobile, I dont promise you it will be as hard as rock but it
              is hard enough to take medium level damage.
            </p>
          </div>
        </div>
        <div className="card-service ">
          <div className="upperCard">
            <img src={brokenBack} alt="How to repair my broken display" />
            <h1 className="fw-bold m-3">BackDoor Replacement</h1>
          </div>
          <div className="lowerCard">
            <p className="lh-lg">
              Backdoor replacement with same quality as OG, Prevent your mobile
              from unwanted slip and use it freely hodling your hand without
              adujusting it to the unbreakable space.
              <br />
              <span className="bg-danger text-light">
                "Keep your mobile alive by reviving the dashed parts".
              </span>
            </p>
          </div>
        </div>
        <div className="card-service ">
          <div className="upperCard">
            <img src={MobileGlass} alt="How to repair my broken display " />
            <h1 className="fw-bold m-3">Display Glass Replacement</h1>
          </div>
          <div className="lowerCard">
            <p className="lh-lg">
              Sometimes there will be a second chance to save our mobile,
              suddenly your mobile fell down and your display is crushed like it
              was hit by a steel ball , but still there is chance the display
              will be protected by display glass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardComp;
