import React from "react";
import logo from "../../Assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import location from "../../Assets/location-sign-svgrepo-com.svg";
import Container from "react-bootstrap/Container";
import "./Footer.css";

const FooterComp = (props) => {
  const mobileNumber = "8489771125";
  return (
    <div className="footer bg-dark">
      <Container>
        <div className="footer-content">
          <img src={logo} alt="My-logo" className="logo" />
          <div className="address text-danger">
            <h5>
              <img
                src={location}
                alt="location-svg"
                style={{ height: "40px" }}
              />
            </h5>
            <p className="fw-bold">
              Cross cut Road, 4th street, Tamilnadu, Coimbatore <br />{" "}
              Pincode-641012
            </p>
          </div>
          <ul className="links">
            <li>
              <a
                href="https://www.instagram.com/themagicmobile8/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "orangered",
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${mobileNumber}`} target="_blank">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{
                    color: "green",
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
            <li
              className="text-success fw-bold list-unstyled"
              style={{ fontSize: "2rem" }}
            >
              Call: +91 8489771125
            </li>
          </ul>

          <div className="map text-center ">
            <iframe
              src={props.url}
              style={{ width: "650px", height: "250px", border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="copyrights text-light text-center">
            <p>Copyrights © 2024, All Rights reserved. </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterComp;
