import React from "react";
import Mobileshop from "../../Assets/mobileshop.jpg";
import "./Hero.css";

const Hero = (props) => {
  const mobileNumber = "8489771125";
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img
            src={Mobileshop}
            alt="magic mobile shop service and second hand mobiles for sale"
            className="mobileshop"
          />
        </div>
        <div className="hero-content">
          <h1 className="fw-bolder">{props.title}</h1>
          <p className="text-center fw-bold para-span">
            (Get All in one place)
          </p>
          <ul className="wehave list-unstyled">
            <li className="text-center">
              Available brands{" "}
              <span className="list-span">(All android and iphones)</span>
            </li>
            <li className="shake-para">Iphones Battery (above 85%)</li>
          </ul>
          <div className="shakebutton">
            <button className="shake text-uppercase ">
              <a
                href={`https://wa.me/${mobileNumber}`}
                target="_blank"
                className="text-decoration-none text-white"
              >
                {" "}
                More Info{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
