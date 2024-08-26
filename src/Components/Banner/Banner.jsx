import React from "react";
import "./Banner.css";
import mobileBanner from "../../Assets/mobile.jpg";

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <div className="left-banner">
          <h1>{props.head}</h1>
        </div>
        <div className="right-banner">
          <img src={mobileBanner} alt="mobile-banner-image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
