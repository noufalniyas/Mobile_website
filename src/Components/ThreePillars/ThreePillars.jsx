import React from "react";
import "./ThreePillars.css";
import check from "../../Assets/Checked2.png";
import warranty from "../../Assets/warranty.jpg";
import guarantee from "../../Assets/Gurantee1.png";
import Container from "react-bootstrap/Container";

const ThreePillars = () => {
  return (
    <div className="threeOffers">
      <Container>
        <div className="offers d-lg-flex  flex-lg-row flex-md-column justify-content-lg-evenly align-items-center">
          <div className="offer ">
            <div className="offer-content">
              <img
                src={check}
                alt="Mobile services done for affordable cost"
                className="check"
              />
              <div className="offer-description">
                <p>
                  <b>Affordable price </b>for all models, value for money and no
                  regret expense
                </p>
              </div>
            </div>
          </div>
          <div className="offer">
            <div className="offer-content">
              <img
                src={warranty}
                alt="Mobile services done for affordable cost"
                className="warranty"
              />
              <div className="offer-description">
                <p>
                  <b>6 months free waranty for services</b> easily changeable
                  with first class quality product
                </p>
              </div>
            </div>
          </div>
          <div className="offer">
            <div className="offer-content">
              <img
                src={guarantee}
                alt="Mobile services done for affordable cost"
                className="guarantee"
              />
              <div className="offer-description">
                <p>
                  <b>No regret 100% customer satisfcation</b> with good customer
                  support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThreePillars;
