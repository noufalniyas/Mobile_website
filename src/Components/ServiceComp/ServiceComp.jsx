import React from "react";
import "./ServiceComp.css";
import Banner from "../Banner/Banner";
import ServiceCardComp from "./ServiceCardComp";
import ServiceOffered from "./ServiceOffered";
const ServiceComp = (props) => {
  return (
    <div className="service">
      <div className="sideService">
        <h4 className="sideService-heading">1-5months used mobiles with box</h4>
      </div>
      <div className="serviceOffer">
        <h1 className="fw-bold text-center mt-5">Save 20% of your Money</h1>
      </div>
      <div className="exchange">
        <h1 className="text-center mt-5 text-decoration-underline text-danger fw-bold ">
          {props.name}
        </h1>
        <Banner head={"Get Best prices For your Used Mobiles"} />
      </div>
      <div className="Our-service">
        <h1 className="text-center fw-bold pt-4">
          {props.service} <hr />
        </h1>
        <h3 className=" text-center text-uppercase ">
          Service Done For <span>All type</span> of mobiles
        </h3>
      </div>
      <div className="what">
        <ServiceCardComp />
      </div>
      <div className="We-do">
        <ServiceOffered />
      </div>
    </div>
  );
};

export default ServiceComp;
