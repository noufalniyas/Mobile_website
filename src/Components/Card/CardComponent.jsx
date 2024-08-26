import React from "react";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";
import rightArrow from "../../Assets/Right_Arrow.png";

const CardComponent = () => {
  return (
    <>
      <div className="card ">
        <Card className="card-child">
          <h1 className="pt-5 mt-3">Tempered Glass </h1>
          <p>
            <ul className="temper list-unstyled">
              <li className="mb-2">
                <img src={rightArrow} alt="arrow" />
                Matt Tempered Glass
              </li>
              <li className="mb-2">
                <img src={rightArrow} alt="arrow" />
                Gorilla Tempered Glass
              </li>
              <li>
                <img src={rightArrow} alt="arrow" />
                Light Tempered Glass
              </li>
            </ul>
            <br />
            <span>
              <button className="readmore mb-5">
                <a href="" className="link">
                  Readmore
                </a>
              </button>
            </span>
          </p>
        </Card>

        <Card className="card-child">
          <h1>Mobile repairs?</h1>
          <p>
            No more worries for broken glass, It's time to Revive your Mobile
            <br />
            <span>
              <button className="readmore mt-5 ">
                <a href="" className="link">
                  Readmore
                </a>
              </button>
            </span>
          </p>
        </Card>

        <Card className="card-child">
          <h1>Magic Mobile Offer</h1>
          <p>
            Second hand mobile at affordable cost
            <br />
            <span>
              <button className="readmore mt-5">
                <a href="" className="link">
                  Readmore
                </a>
              </button>
            </span>
          </p>
        </Card>
      </div>
      <div className="hr">
        <hr />
      </div>
    </>
  );
};

export default CardComponent;
