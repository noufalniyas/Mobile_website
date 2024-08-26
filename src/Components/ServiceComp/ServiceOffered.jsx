import { useEffect } from "react";
import "./ServiceOffered.css";
import Container from "react-bootstrap/Container";
import { Figure } from "react-bootstrap";
import Video1 from "../../video/Iphone Backcase.mp4";
import Video2 from "../../video/vivo.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
const ServiceOffered = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="serviceoffered">
      <Container>
        <div className="serviceOfferedHeader">
          <h1>What We Do</h1>
        </div>
        <div className="ourWorks">
          <div className="my-works">
            <div className="video" data-aos="fade-right">
              <Figure>
                <video className="works" controls muted>
                  <source src={Video2} type="video/mp4" />
                </video>
              </Figure>
            </div>
            <div className="Video-content" data-aos="fade-up">
              <p>
                Vivo V19, display change and sucees rate is 100% , working
                perfectly with clear audio and touch sensitiy display done
                within as little as 1.30hrs{" "}
              </p>
            </div>
          </div>
          <div className="stickering">
            <div className="video" data-aos="fade-left">
              <Figure>
                <video className="works" controls>
                  <source src={Video1} type="video/mp4" />
                </video>
              </Figure>
            </div>
            <div className="Video-content" data-aos="fade-down">
              <p>
                Customized iphone back case stickering Golden breeze, All type
                of customization avalaible anime, real-images, etc
              </p>
            </div>
          </div>
          <div className="button">
            <button>
              <Link to="/Contact" className="get-info">
                Get Info
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceOffered;
